"use client";

import { useEffect, useRef } from "react";

export interface SphereGallery3DProps {
  images: Array<{ image: string; link?: string }>;
  branches?: number; // default: 34
  background?: string; // transparent or "#F6F8FA"
  scale?: number; // 60
  size?: number; // 28
  scatter?: number; // 0
  rounded?: number; // 18
  direction?: "clockwise" | "counterclockwise";
  hover?: number; // 200
  core?: { coreSize: number; coreColor: string; lineColor: string };
  speed?: number; // 18 (auto-orbit speed)
}

function createRotationMatrix(yaw: number, pitch: number): number[] {
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);

  // Yaw (Y-axis) * Pitch (X-axis)
  return [
    cy, sy * sp, sy * cp, 0,
    0, cp, -sp, 0,
    -sy, cy * sp, cy * cp, 0,
    0, 0, 0, 1,
  ];
}

const VS_SOURCE = `
attribute vec3 a_position; // quad corner [-0.5, 0.5]
attribute vec3 a_instancePos; // sphere node 3D pos
attribute vec2 a_texCoord;

uniform mat4 u_rotation;
uniform vec2 u_resolution;
uniform vec2 u_mouseRay; // ND coordinates [-1, 1]
uniform float u_scale;
uniform float u_size;

varying vec2 v_texCoord;
varying float v_depth;

void main() {
  v_texCoord = a_texCoord;

  // Rotate node position
  vec4 rotPos = u_rotation * vec4(a_instancePos, 1.0);

  // Magnetic Pull towards mouse ray
  vec2 ndcPos = rotPos.xy / (rotPos.z + 2.5);
  float distToMouse = length(ndcPos - u_mouseRay);
  float pullStrength = smoothstep(0.8, 0.0, distToMouse) * 0.15;
  rotPos.xy += (u_mouseRay - ndcPos) * pullStrength;

  // Camerafacing billboard with 75% depth blending
  vec3 pos = rotPos.xyz;
  vec3 vertexOffset = vec3(a_position.xy * u_size * 0.01, 0.0);
  pos += vertexOffset;

  v_depth = (pos.z + 1.0) * 0.5; // normalized depth [0, 1]

  float aspect = u_resolution.x / u_resolution.y;
  float z = pos.z + 3.0;
  gl_Position = vec4(pos.x / aspect, pos.y, z * 0.5, z);
}
`;

const FS_SOURCE = `
precision mediump float;

varying vec2 v_texCoord;
varying float v_depth;

uniform float u_rounded; // e.g. 0.18
uniform vec4 u_color;

// SDF for rounded rectangle
float sdRoundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

void main() {
  vec2 p = v_texCoord - vec2(0.5);
  vec2 b = vec2(0.45);
  float r = u_rounded * 0.4;

  float d = sdRoundedBox(p, b, r);
  float alpha = 1.0 - smoothstep(-0.01, 0.01, d);

  if (alpha < 0.01) discard;

  // Depth dimming (farther nodes are dimmer)
  float dim = mix(0.35, 1.0, clamp(v_depth, 0.0, 1.0));
  vec3 finalColor = mix(vec3(0.04, 0.05, 0.07), u_color.rgb, dim);

  gl_FragColor = vec4(finalColor, u_color.a * alpha);
}
`;

export default function SphereGallery3D({
  images,
  branches = 34,
  background = "transparent",
  scale = 60,
  size = 28,
  scatter = 0,
  rounded = 18,
  direction = "clockwise",
  speed = 18,
}: SphereGallery3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl") || (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return;

    // Compile Shaders
    const createShader = (glCtx: WebGLRenderingContext, type: number, src: string) => {
      const shader = glCtx.createShader(type);
      if (!shader) return null;
      glCtx.shaderSource(shader, src);
      glCtx.compileShader(shader);
      if (!glCtx.getShaderParameter(shader, glCtx.COMPILE_STATUS)) {
        console.error("Shader Compile Error:", glCtx.getShaderInfoLog(shader));
        glCtx.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl, gl.VERTEX_SHADER, VS_SOURCE);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FS_SOURCE);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program Link Error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Quad Vertices [-0.5, 0.5]
    const quadVertices = new Float32Array([
      -0.5, -0.5, 0.0, 0.0, 0.0,
       0.5, -0.5, 0.0, 1.0, 0.0,
      -0.5,  0.5, 0.0, 0.0, 1.0,
       0.5,  0.5, 0.0, 1.0, 1.0,
    ]);

    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, quadVertices, gl.STATIC_DRAW);

    // Golden Angle Fibonacci Spiral Node Generation
    const nodeCount = Math.max(branches, images.length || 34);
    const nodes: number[] = [];
    const phi = (1 + Math.sqrt(5)) / 2;
    const goldenAngle = 2 * Math.PI * (1 - 1 / phi);

    for (let i = 0; i < nodeCount; i++) {
      const y = 1 - (i / (nodeCount - 1)) * 2; // y in [-1, 1]
      const radius = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;

      // Seeded jitter
      const jitterX = (Math.sin(i * 12.9898) * 43758.5453) % 1 * scatter * 0.05;
      const jitterY = (Math.cos(i * 78.233) * 43758.5453) % 1 * scatter * 0.05;
      const jitterZ = (Math.sin(i * 45.164) * 43758.5453) % 1 * scatter * 0.05;

      const x = Math.cos(theta) * radius + jitterX;
      const z = Math.sin(theta) * radius + jitterZ;
      nodes.push(x, y + jitterY, z);
    }

    // Uniform locations
    const uRotation = gl.getUniformLocation(program, "u_rotation");
    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uMouseRay = gl.getUniformLocation(program, "u_mouseRay");
    const uScale = gl.getUniformLocation(program, "u_scale");
    const uSize = gl.getUniformLocation(program, "u_size");
    const uRounded = gl.getUniformLocation(program, "u_rounded");
    const uColor = gl.getUniformLocation(program, "u_color");

    const aPosition = gl.getAttribLocation(program, "a_position");
    const aInstancePos = gl.getAttribLocation(program, "a_instancePos");
    const aTexCoord = gl.getAttribLocation(program, "a_texCoord");

    // State Variables for Inertial Drag Orbit
    let yaw = 0;
    let pitch = 0;
    let yawVelocity = (speed * 0.0002) * (direction === "clockwise" ? 1 : -1);
    let pitchVelocity = 0;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseRay = [0, 0];

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRay = [x, y];

      if (isDragging) {
        const dx = e.clientX - lastMouseX;
        const dy = e.clientY - lastMouseY;
        yawVelocity = dx * 0.005;
        pitchVelocity = dy * 0.005;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    let animId: number;

    const render = () => {
      if (!canvas || !gl) return;

      // Resize Canvas
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      // Inertial Orbit Update
      yaw += yawVelocity;
      pitch += pitchVelocity;

      // Friction / Dampening
      if (!isDragging) {
        yawVelocity *= 0.95;
        pitchVelocity *= 0.95;
        // Keep minimum auto-rotation
        if (Math.abs(yawVelocity) < 0.001) {
          yawVelocity = (speed * 0.0001) * (direction === "clockwise" ? 1 : -1);
        }
      }

      const rotMatrix = createRotationMatrix(yaw, pitch);

      gl.uniformMatrix4fv(uRotation, false, new Float32Array(rotMatrix));
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform2f(uMouseRay, mouseRay[0], mouseRay[1]);
      gl.uniform1f(uScale, scale);
      gl.uniform1f(uSize, size);
      gl.uniform1f(uRounded, rounded / 100);
      gl.uniform4f(uColor, 0.04, 0.05, 0.07, 1.0); // Cold graphite plates

      gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
      gl.enableVertexAttribArray(aPosition);
      gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 20, 0);
      gl.enableVertexAttribArray(aTexCoord);
      gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, 20, 12);

      // Draw Nodes
      for (let i = 0; i < nodeCount; i++) {
        gl.vertexAttrib3f(aInstancePos, nodes[i * 3], nodes[i * 3 + 1], nodes[i * 3 + 2]);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (gl) {
        gl.deleteBuffer(quadBuffer);
        gl.deleteProgram(program);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
      }
    };
  }, [branches, images, scale, size, scatter, rounded, direction, speed]);

  return (
    <div
      className="relative w-full h-[500px] md:h-[650px] overflow-hidden"
      style={{ background: background === "transparent" ? "none" : background }}
    >
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
