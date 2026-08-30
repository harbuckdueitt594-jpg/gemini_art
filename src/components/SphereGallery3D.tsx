"use client";

import React, { useRef, useEffect } from "react";

export interface SphereGallery3DProps {
  images?: Array<{ image: string; link?: string }>;
  branches?: number; // default 34
  background?: string; // default #000000
  scale?: number; // default 60
  size?: number; // default 28
  scatter?: number; // default 0
  rounded?: number; // default 18
  direction?: "clockwise" | "counterclockwise";
  hover?: number; // default 200
  core?: {
    coreSize?: number;
    coreColor?: string;
    lineColor?: string;
  };
  speed?: number; // default 18
  className?: string;
}

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1738443213486-369884a438cc?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1588576892215-4e38d33fd73d?w=900&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1738599433881-580f23c6df20?w=900&auto=format&fit=crop&q=60",
];

export default function SphereGallery3D({
  images = DEFAULT_IMAGES.map((img) => ({ image: img })),
  branches = 34,
  background = "#000000",
  scale = 60,
  size = 28,
  scatter = 0,
  rounded = 18,
  direction = "counterclockwise",
  hover = 200,
  core = {
    coreSize: 24,
    coreColor: "rgba(255, 255, 255, 0.35)",
    lineColor: "rgba(255, 255, 255, 0.35)",
  },
  speed = 18,
  className = "",
}: SphereGallery3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Interaction State
  const isDragging = useRef(false);
  const previousPointer = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rotation = useRef<{ yaw: number; pitch: number }>({ yaw: 0, pitch: 0 });
  const velocity = useRef<{ yaw: number; pitch: number }>({ yaw: 0, pitch: 0 });
  const pointerPos = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const zoomScale = useRef<number>(scale);

  // Helper: parse HEX or RGBA to array [r, g, b, a]
  const parseColor = (colorStr: string): [number, number, number, number] => {
    if (colorStr.startsWith("#")) {
      let hex = colorStr.slice(1);
      if (hex.length === 6) hex += "FF";
      const num = parseInt(hex, 16);
      return [
        ((num >> 24) & 255) / 255,
        ((num >> 16) & 255) / 255,
        ((num >> 8) & 255) / 255,
        (num & 255) / 255,
      ];
    } else if (colorStr.startsWith("rgba") || colorStr.startsWith("rgb")) {
      const match = colorStr.match(/[\d.]+/g);
      if (match) {
        return [
          parseFloat(match[0]) / 255,
          parseFloat(match[1]) / 255,
          parseFloat(match[2]) / 255,
          match[3] ? parseFloat(match[3]) : 1.0,
        ];
      }
    }
    return [1, 1, 1, 0.35];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: true, antialias: true });
    if (!gl) return;

    // --- Shaders ---
    const vsSource = `
      attribute vec3 aPosition;
      attribute vec2 aTexCoord;
      attribute float aNodeIndex;
      attribute vec3 aNormal;

      uniform mat4 uModelViewMatrix;
      uniform mat4 uProjectionMatrix;
      uniform float uTime;
      uniform float uPlateSize;
      uniform float uHoverForce;
      uniform vec2 uPointer;

      varying vec2 vTexCoord;
      varying float vDepth;
      varying float vNodeIndex;

      void main() {
        vTexCoord = aTexCoord;
        vec4 mvPosition = uModelViewMatrix * vec4(aPosition, 1.0);
        vDepth = mvPosition.z;
        vNodeIndex = aNodeIndex;

        gl_Position = uProjectionMatrix * mvPosition;
      }
    `;

    const fsSource = `
      precision mediump float;

      varying vec2 vTexCoord;
      varying float vDepth;
      varying float vNodeIndex;

      uniform sampler2D uSampler;
      uniform float uRounded;
      uniform vec4 uCoreColor;

      // Signed distance function for rounded rectangle
      float sdRoundedBox(vec2 p, vec2 b, float r) {
        vec2 q = abs(p) - b + r;
        return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
      }

      void main() {
        vec2 st = vTexCoord - vec2(0.5);
        float cornerRadius = uRounded * 0.5;
        float d = sdRoundedBox(st, vec2(0.5), cornerRadius);

        // Feathered corner mask (1 pixel screen smoothstep)
        float alpha = 1.0 - smoothstep(-0.01, 0.01, d);
        if (alpha < 0.01) discard;

        vec4 texColor = texture2D(uSampler, vTexCoord);

        // Depth dimming (far plates read as shell)
        float depthDim = smoothstep(-300.0, 100.0, vDepth);
        vec3 finalColor = mix(texColor.rgb * 0.3, texColor.rgb, depthDim);

        gl_FragColor = vec4(finalColor, texColor.a * alpha);
      }
    `;

    // Compile Shader Utility
    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
    gl.useProgram(program);

    // --- Node Locations via Golden Ratio Fibonacci Sphere ---
    const nodes: Array<{ x: number; y: number; z: number; id: number }> = [];
    const phi = (1 + Math.sqrt(5)) / 2; // Golden Ratio

    for (let i = 0; i < branches; i++) {
      const theta = 2 * Math.PI * i / phi;
      const y = 1 - (i / (branches - 1)) * 2; // -1 to 1
      const radius = Math.sqrt(1 - y * y);

      // Seeded jitter for scatter
      const seed = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
      const jitter = ((seed - Math.floor(seed)) - 0.5) * (scatter / 100);

      const r = 1 + jitter;
      const x = Math.cos(theta) * radius * r;
      const z = Math.sin(theta) * radius * r;

      nodes.push({ x: x * 120, y: y * 120, z: z * 120, id: i });
    }

    // --- Create Textures for Images ---
    const textures: WebGLTexture[] = [];
    const imageList = images.length > 0 ? images : DEFAULT_IMAGES.map((img) => ({ image: img }));

    imageList.forEach((imgObj) => {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);

      // Placeholder 1x1 pixel
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        1,
        1,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        new Uint8Array([100, 100, 100, 255])
      );

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = imgObj.image;
      img.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      };

      if (texture) textures.push(texture);
    });

    // --- Mesh Geometry for Image Plates ---
    const plateWidth = size * 0.8;
    const plateHeight = size * 0.8;

    const positions: number[] = [];
    const texCoords: number[] = [];
    const nodeIndices: number[] = [];
    const indices: number[] = [];

    nodes.forEach((node, idx) => {
      const x = node.x;
      const y = node.y;
      const z = node.z;

      // Local quad offset
      const halfW = plateWidth / 2;
      const halfH = plateHeight / 2;

      // 4 Vertices per plate
      positions.push(
        x - halfW, y - halfH, z,
        x + halfW, y - halfH, z,
        x + halfW, y + halfH, z,
        x - halfW, y + halfH, z
      );

      texCoords.push(0, 0, 1, 0, 1, 1, 0, 1);

      for (let k = 0; k < 4; k++) {
        nodeIndices.push(idx);
      }

      const base = idx * 4;
      indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    });

    // Buffers
    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const texBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texCoords), gl.STATIC_DRAW);

    const indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Uniform locations
    const uModelViewMatrix = gl.getUniformLocation(program, "uModelViewMatrix");
    const uProjectionMatrix = gl.getUniformLocation(program, "uProjectionMatrix");
    const uRounded = gl.getUniformLocation(program, "uRounded");
    const uCoreColor = gl.getUniformLocation(program, "uCoreColor");

    // Attributes
    const aPosition = gl.getAttribLocation(program, "aPosition");
    const aTexCoord = gl.getAttribLocation(program, "aTexCoord");

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, displayWidth, displayHeight);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Render Loop
    let animId: number;
    let lastTime = 0;

    const render = (time: number) => {
      const dt = (time - lastTime) / 1000;
      lastTime = time;

      gl.clearColor(0.03, 0.03, 0.04, 1.0); // Dark sleek background
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      // Idle Rotation
      if (!isDragging.current) {
        const dirSign = direction === "clockwise" ? -1 : 1;
        rotation.current.yaw += dirSign * (speed / 10) * dt;
      }

      // Inertia decay
      rotation.current.yaw += velocity.current.yaw * dt;
      rotation.current.pitch += velocity.current.pitch * dt;
      velocity.current.yaw *= 0.92;
      velocity.current.pitch *= 0.92;

      // Matrix calculations
      const aspect = canvas.width / canvas.height;
      const fov = 45 * (Math.PI / 180);
      const near = 0.1;
      const far = 1000.0;

      // Perspective Projection
      const projMatrix = new Float32Array(16);
      const f = 1.0 / Math.tan(fov / 2);
      projMatrix[0] = f / aspect;
      projMatrix[5] = f;
      projMatrix[10] = (far + near) / (near - far);
      projMatrix[11] = -1;
      projMatrix[14] = (2 * far * near) / (near - far);

      // ModelView Matrix
      const mvMatrix = new Float32Array(16);
      // Identity
      mvMatrix[0] = 1; mvMatrix[5] = 1; mvMatrix[10] = 1; mvMatrix[15] = 1;

      // Translate camera back
      const camZ = -zoomScale.current * 5.0;
      mvMatrix[14] = camZ;

      // Rotation Yaw and Pitch
      const cosY = Math.cos(rotation.current.yaw);
      const sinY = Math.sin(rotation.current.yaw);
      const cosP = Math.cos(rotation.current.pitch);
      const sinP = Math.sin(rotation.current.pitch);

      // Apply Yaw & Pitch rotation to mvMatrix
      mvMatrix[0] = cosY;
      mvMatrix[2] = sinY;
      mvMatrix[5] = cosP;
      mvMatrix[6] = -sinP;
      mvMatrix[8] = -sinY * cosP;
      mvMatrix[10] = cosY * cosP;

      gl.uniformMatrix4fv(uProjectionMatrix, false, projMatrix);
      gl.uniformMatrix4fv(uModelViewMatrix, false, mvMatrix);
      gl.uniform1f(uRounded, rounded / 100);

      const parsedCoreColor = parseColor(core.coreColor || "#FFFFFF59");
      gl.uniform4fv(uCoreColor, new Float32Array(parsedCoreColor));

      // Draw Plates
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aPosition);

      gl.bindBuffer(gl.ARRAY_BUFFER, texBuffer);
      gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(aTexCoord);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

      // Bind texture
      if (textures.length > 0) {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, textures[0]);
      }

      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    // Pointer Drag Handlers
    const handlePointerDown = (e: MouseEvent) => {
      isDragging.current = true;
      previousPointer.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: MouseEvent) => {
      pointerPos.current = { x: e.clientX, y: e.clientY };
      if (!isDragging.current) return;

      const dx = e.clientX - previousPointer.current.x;
      const dy = e.clientY - previousPointer.current.y;

      rotation.current.yaw += dx * 0.005;
      rotation.current.pitch += dy * 0.005;

      velocity.current = { yaw: dx * 0.005, pitch: dy * 0.005 };

      previousPointer.current = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      zoomScale.current = Math.min(Math.max(zoomScale.current + e.deltaY * 0.05, 20), 150);
    };

    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", handlePointerUp);
    canvas.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, [branches, scale, size, scatter, rounded, direction, hover, core, speed, images]);

  return (
    <div className={`relative w-full h-[600px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
