export type Category =
  | "ALL PROJECTS"
  | "SMM & BRAND IDENTITY"
  | "NEURO-CINEMATIC"
  | "E-COMMERCE & PRINT"
  | "VIBE-CODING & FAST WEB"
  | "AI ARCHITECTURE & AGENTS";

export interface Project {
  id: string;
  title: string;
  category: Category;
  description: string;
  solution?: string;
  result?: string;
  techStack?: string[];
  imageUrl?: string;
  size?: "small" | "medium" | "large";
}

export const CATEGORIES: Category[] = [
  "ALL PROJECTS",
  "SMM & BRAND IDENTITY",
  "NEURO-CINEMATIC",
  "E-COMMERCE & PRINT",
  "VIBE-CODING & FAST WEB",
  "AI ARCHITECTURE & AGENTS",
];

export const PROJECTS: Project[] = [
  {
    id: "eidos-smm",
    title: "EIDOS MASSAGE STUDIO — От комнаты к своему пространству",
    category: "SMM & BRAND IDENTITY",
    description: "Построение единого визуального языка от контента в соцсетях до печатных носителей. Чистая эстетика, типографика, фокус на профессиональной реабилитации.",
    result: "100% единый стиль во всех точках касания (SMM, печать). Рост вовлеченности и формирование образа премиального пространства.",
    size: "large"
  },
  {
    id: "leanca-beauty",
    title: "MAKE-UP ARTIST LEANCA — Упаковка портфолио для Beauty & FX индустрии",
    category: "SMM & BRAND IDENTITY",
    description: "Подсветили детализацию и гордость за труд. Серия слайдов карусели для соцсетей гримера. \"Горный Эльф\" (дипломная работа в киногриме), инженерия, текстура и детали образа.",
    size: "medium"
  },
  {
    id: "neuro-cinematic",
    title: "CINEMATIC PRODUCTION без миллионных бюджетов на съемки",
    category: "NEURO-CINEMATIC",
    description: "Пока маркетплейсы и бренды соревнуются в кричащих цветах и визуальном шуме, создаются сдержанные, глубокие цифровые среды для продуктов.",
    solution: "С помощью сложного промпт-инжиниринга генерируются фотореалистичные сцены (макро, студийный свет, природные локации), заменяя традиционный продакшн.",
    size: "large"
  },
  {
    id: "minimalist-production",
    title: "Minimalist Cinematic Production",
    category: "E-COMMERCE & PRINT",
    description: "Создание чистого, минималистичного визуального контента для электронной коммерции, выделяющегося на фоне визуального шума.",
    size: "small"
  },
  {
    id: "poster-design",
    title: "Poster Design Collection",
    category: "E-COMMERCE & PRINT",
    description: "Серия постеров: FORE SUMMER, MOVE ALZ, RASTO FREETANK.",
    size: "medium"
  },
  {
    id: "presentations",
    title: "Longreads & Presentations",
    category: "E-COMMERCE & PRINT",
    description: "Психология (лонгрид), Академическая презентация, Коммерческая презентация (\"Приемка квартиры\").",
    size: "medium"
  },
  {
    id: "eidos-web",
    title: "EIDOS-STUDIO.RU — Запуск сайта под ключ за 7 дней",
    category: "VIBE-CODING & FAST WEB",
    description: "Альтернатива раздутым веб-студиям с циклом разработки в 1.5–2 месяца. Полное создание UI/UX дизайна, верстка и деплой функционального сайта за неделю.",
    solution: "Сочетание профессиональных знаний дизайн-систем, глубокого понимания ИИ-инструментов, промптинга и программирования.",
    result: "Скорость + качество. Чистый код, адаптив под все устройства, моментальная выгрузка.",
    size: "large"
  },
  {
    id: "kai-agent",
    title: "K.A.I. INTELLIGENCE — Автономный ИИ-ассистент для массажной студии",
    category: "AI ARCHITECTURE & AGENTS",
    description: "Снять нагрузку с администраторов студии во время первичных консультаций, повысить конверсию в запись.",
    solution: "Спроектирован и интегрирован на сайт eidos-studio.ru персональный умный ассистент — он квалифицирует вопрос посетителя, рассказывает об услугах и снимает страхи.",
    techStack: ["Llama 3.3", "Python", "Google Apps Script", "Web Integration"],
    size: "large"
  }
];
