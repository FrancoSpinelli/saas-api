import { ServiceModel } from "../../modules/services/services.model";
import { plansMock } from "./plans.seeder";
import { usersMock } from "./users.seeder";

export const servicesMock = [
  {
    _id: "64a1f3b2e4c5d6f700000031",
    name: "Aprendiendo a programar con Franco Spinelli",
    shortDescription: "Canal dedicado a la enseñanza de la programación",
    longDescription:
      "Canal educativo enfocado en enseñar fundamentos y buenas prácticas de programación mediante ejemplos prácticos, proyectos y tutoriales paso a paso. Ideal para principiantes y desarrolladores que buscan mejorar sus habilidades.",
    category: "64a1f3b2e4c5d6f700000013",
    plans: [plansMock[0], plansMock[1]],
    owner: usersMock[0],
    image: "https://placehold.co/500x200?text=Programming",
  },
  {
    _id: "64a1f3b2e4c5d6f700000032",
    name: "Sistema de gestión de Pañol Online",
    shortDescription: "Software para la gestión de inventarios en línea",
    longDescription:
      "Plataforma web para gestionar inventarios, pedidos y movimientos de almacén, con control de usuarios, reportes y notificaciones.",
    category: "64a1f3b2e4c5d6f700000012",
    plans: [plansMock[2]],
    owner: usersMock[0],
    image: "https://placehold.co/500x200?text=Pañol",
  },
  {
    _id: "64a1f3b2e4c5d6f700000033",
    name: "Consultoría DevOps",
    shortDescription: "Integración continua, despliegue y automatización de infraestructuras",
    longDescription:
      "Evaluación de pipelines, automatización CI/CD, gestión de infraestructuras como código y optimización del ciclo de entrega.",
    category: "64a1f3b2e4c5d6f700000014",
    plans: [plansMock[0], plansMock[1]],
    owner: usersMock[0],
    image: "https://placehold.co/500x200?text=DevOps",
  },
  {
    _id: "64a1f3b2e4c5d6f700000034",
    name: "Diseño UX/UI",
    shortDescription: "Diseño de interfaces y experiencia de usuario web y mobile",
    longDescription:
      "Diseño centrado en el usuario con wireframes, prototipos interactivos y pruebas de usabilidad.",
    category: "64a1f3b2e4c5d6f700000015",
    plans: [plansMock[1]],
    owner: usersMock[1],
    image: "https://placehold.co/500x200?text=UX%2FUI",
  },
  {
    _id: "64a1f3b2e4c5d6f700000035",
    name: "Desarrollo Mobile a medida",
    shortDescription: "Aplicaciones móviles nativas e híbridas personalizadas",
    longDescription:
      "Desarrollo de apps para iOS y Android con integración de APIs y despliegue en tiendas.",
    category: "64a1f3b2e4c5d6f700000013",
    plans: [plansMock[0]],
    owner: usersMock[1],
    image: "https://placehold.co/500x200?text=Mobile",
  },
  {
    _id: "64a1f3b2e4c5d6f700000036",
    name: "Auditoría de seguridad",
    shortDescription: "Análisis de vulnerabilidades y pruebas de penetración",
    longDescription:
      "Servicio de auditoría con informes detallados, priorización de riesgos y plan de remediación.",
    category: "64a1f3b2e4c5d6f700000014",
    plans: [plansMock[3]],
    owner: usersMock[1],
    image: "https://placehold.co/500x200?text=Security",
  },
  {
    _id: "64a1f3b2e4c5d6f700000037",
    name: "Edición de Video Profesional",
    shortDescription: "Producción y edición audiovisual para redes y empresas",
    longDescription:
      "Edición profesional con efectos, sonido, color y animaciones para campañas publicitarias y contenido digital.",
    category: "64a1f3b2e4c5d6f700000015",
    plans: [plansMock[0], plansMock[1]],
    owner: usersMock[0],
    image: "https://placehold.co/500x200?text=Video+Editing",
  },
  {
    _id: "64a1f3b2e4c5d6f700000038",
    name: "Consultoría Cloud AWS",
    shortDescription: "Migraciones y optimización de infraestructura en la nube",
    longDescription:
      "Evaluación, diseño y mantenimiento de arquitecturas cloud seguras y escalables en AWS.",
    category: "64a1f3b2e4c5d6f700000014",
    plans: [plansMock[1], plansMock[2], plansMock[3]],
    owner: usersMock[0],
    image: "https://placehold.co/500x200?text=AWS+Consulting",
  },
  {
    _id: "64a1f3b2e4c5d6f700000039",
    name: "Curso de React Avanzado",
    shortDescription: "Aprende React con proyectos reales y buenas prácticas",
    longDescription:
      "Curso intensivo con hooks, context API, optimización de rendimiento y patrones de diseño modernos.",
    category: "64a1f3b2e4c5d6f700000013",
    plans: [plansMock[2]],
    owner: usersMock[1],
    image: "https://placehold.co/500x200?text=React+Course",
  },
  {
    _id: "64a1f3b2e4c5d6f70000003A",
    name: "Curso de Python desde cero",
    shortDescription: "Aprende a programar con Python paso a paso",
    longDescription:
      "Curso para principiantes que abarca fundamentos, estructuras de datos y proyectos prácticos.",
    category: "64a1f3b2e4c5d6f700000013",
    plans: [plansMock[0], plansMock[1]],
    owner: usersMock[0],
    image: "https://placehold.co/500x200?text=Python",
  },
  {
    _id: "64a1f3b2e4c5d6f70000003B",
    name: "Diseño de Logotipos Personalizados",
    shortDescription: "Creación de identidad visual profesional",
    longDescription:
      "Diseño de logotipos adaptados a la marca, manual de uso y variantes digitales para redes sociales.",
    category: "64a1f3b2e4c5d6f700000015",
    plans: [plansMock[1]],
    owner: usersMock[1],
    image: "https://placehold.co/500x200?text=Logo+Design",
  },
  {
    _id: "64a1f3b2e4c5d6f70000003C",
    name: "Desarrollo de APIs REST",
    shortDescription: "Creación de APIs seguras y escalables",
    longDescription:
      "Implementación de APIs con Node.js y MongoDB siguiendo buenas prácticas y autenticación JWT.",
    category: "64a1f3b2e4c5d6f700000012",
    plans: [plansMock[3]],
    owner: usersMock[0],
    image: "https://placehold.co/500x200?text=API",
  },
  {
    _id: "64a1f3b2e4c5d6f70000003D",
    name: "Consultoría en Ciberseguridad",
    shortDescription: "Protege tu infraestructura y tus datos",
    longDescription:
      "Evaluación de riesgos, formación de equipos de respuesta y políticas de seguridad digital.",
    category: "64a1f3b2e4c5d6f700000014",
    plans: [plansMock[2]],
    owner: usersMock[1],
    image: "https://placehold.co/500x200?text=Ciberseguridad",
  },
  {
    _id: "64a1f3b2e4c5d6f70000003E",
    name: "Streaming de Eventos en Vivo",
    shortDescription: "Transmisión profesional de conferencias y conciertos",
    longDescription:
      "Solución integral para la transmisión en vivo con cámaras, audio y overlays personalizados.",
    category: "64a1f3b2e4c5d6f700000011",
    plans: [plansMock[0], plansMock[1]],
    owner: usersMock[0],
    image: "https://placehold.co/500x200?text=Live+Streaming",
  },
  {
    _id: "64a1f3b2e4c5d6f70000003F",
    name: "Mentoría en Desarrollo Fullstack",
    shortDescription: "Acompañamiento personalizado para desarrolladores",
    longDescription:
      "Sesiones 1 a 1 para guiarte en proyectos reales con tecnologías como React, Node.js y MongoDB.",
    category: "64a1f3b2e4c5d6f700000013",
    plans: [plansMock[1], plansMock[2]],
    owner: usersMock[1],
    image: "https://placehold.co/500x200?text=Mentoria",
  },
  {
    _id: "64a1f3b2e4c5d6f700000040",
    name: "Desarrollo Web Corporativo",
    shortDescription: "Sitios web profesionales y responsivos",
    longDescription:
      "Desarrollo web con SEO, optimización de rendimiento y panel de administración.",
    category: "64a1f3b2e4c5d6f700000012",
    plans: [plansMock[0], plansMock[1]],
    owner: usersMock[0],
    image: "https://placehold.co/500x200?text=Web+Dev",
  },
  {
    _id: "64a1f3b2e4c5d6f700000041",
    name: "Consultoría IA y Machine Learning",
    shortDescription: "Implementación de modelos de IA en tu negocio",
    longDescription:
      "Entrenamiento de modelos predictivos, análisis de datos y automatización de decisiones empresariales.",
    category: "64a1f3b2e4c5d6f700000014",
    plans: [plansMock[2]],
    owner: usersMock[1],
    image: "https://placehold.co/500x200?text=AI",
  },
  {
    _id: "64a1f3b2e4c5d6f700000042",
    name: "Diseño de Portafolios Digitales",
    shortDescription: "Portafolios interactivos para profesionales creativos",
    longDescription:
      "Diseño y desarrollo de portafolios personalizados con animaciones, efectos y CMS integrado.",
    category: "64a1f3b2e4c5d6f700000015",
    plans: [plansMock[1]],
    owner: usersMock[0],
    image: "https://placehold.co/500x200?text=Portfolio",
  },
  {
    _id: "64a1f3b2e4c5d6f700000043",
    name: "Streaming de Video Educativo",
    shortDescription: "Plataforma de streaming para clases y webinars",
    longDescription:
      "Solución completa para transmisión, almacenamiento y control de acceso a contenido educativo.",
    category: "64a1f3b2e4c5d6f700000011",
    plans: [plansMock[0], plansMock[1]],
    owner: usersMock[1],
    image: "https://placehold.co/500x200?text=Edu+Streaming",
  },
];

export async function seedServices() {
  await ServiceModel.deleteMany({});
  await ServiceModel.insertMany(servicesMock);
  console.log("✅ Services seeded");
}

export async function unseedServices() {
  await ServiceModel.deleteMany({});
  console.log("✅ Services cleared");
}
