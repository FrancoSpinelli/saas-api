import { ServiceModel } from "../../modules/services/services.model";

export const servicesMock = [
  {
    _id: "64a1f3b2e4c5d6f700000031",
    name: "Aprendiendo a programar con Franco Spinelli",
    shortDescription: "Canal dedicado a la enseñanza de la programación",
    longDescription:
      "Canal educativo enfocado en enseñar fundamentos y buenas prácticas de programación mediante ejemplos prácticos, proyectos y tutoriales paso a paso. Ideal para principiantes y desarrolladores que buscan mejorar sus habilidades.",
    category: "64a1f3b2e4c5d6f700000013",
    plans: [
      "64a1f3b2e4c5d6f700000021",
      "64a1f3b2e4c5d6f700000022",
      "64a1f3b2e4c5d6f700000023",
      "64a1f3b2e4c5d6f700000024",
    ],
    owner: "64a1f3b2e4c5d6f700000001",
    image: "https://placehold.co/500x200?text=Programming",
  },
  {
    _id: "64a1f3b2e4c5d6f700000032",
    name: "Sistema de gestión de Pañol Online",
    shortDescription: "Software para la gestión de inventarios en línea",
    longDescription:
      "Plataforma web para gestionar inventarios, pedidos y movimientos de almacén, con control de usuarios, reportes y notificaciones. Optimiza el control de stock y facilita auditorías y auditorías de materiales.",
    category: "64a1f3b2e4c5d6f700000012",
    plans: [
      "64a1f3b2e4c5d6f700000021",
      "64a1f3b2e4c5d6f700000022",
      "64a1f3b2e4c5d6f700000023",
      "64a1f3b2e4c5d6f700000024",
    ],
    owner: "64a1f3b2e4c5d6f700000001",
    image: "https://placehold.co/500x200?text=Pañol",
  },
  {
    _id: "64a1f3b2e4c5d6f700000033",
    name: "Consultoría DevOps",
    shortDescription:
      "Servicios de integración continua, despliegue y automatización de infraestructuras",
    longDescription:
      "Servicio integral de DevOps que incluye evaluación de pipelines, automatización de CI/CD, gestión de infraestructuras como código y optimización del ciclo de entrega. Acompañamiento en adopción de prácticas y herramientas escalables.",
    category: "64a1f3b2e4c5d6f700000014",
    plans: ["64a1f3b2e4c5d6f700000021", "64a1f3b2e4c5d6f700000022", "64a1f3b2e4c5d6f700000023"],
    owner: "64a1f3b2e4c5d6f700000002",
    image: "https://placehold.co/500x200?text=DevOps",
  },
  {
    _id: "64a1f3b2e4c5d6f700000034",
    name: "Diseño UX/UI",
    shortDescription:
      "Servicio de diseño de interfaces y experiencia de usuario para aplicaciones web y móviles",
    longDescription:
      "Diseño centrado en el usuario que abarca investigación, prototipado, pruebas de usabilidad y diseño visual. Se entregan flujos de usuario, wireframes y prototipos interactivos listos para desarrollo.",
    category: "64a1f3b2e4c5d6f700000015",
    plans: ["64a1f3b2e4c5d6f700000022", "64a1f3b2e4c5d6f700000024"],
    owner: "64a1f3b2e4c5d6f700000003",
    image: "https://placehold.co/500x200?text=UX%2FUI",
  },
  {
    _id: "64a1f3b2e4c5d6f700000035",
    name: "Desarrollo Mobile a medida",
    shortDescription:
      "Creación de aplicaciones móviles nativas e híbridas según requisitos del cliente",
    longDescription:
      "Desarrollo de aplicaciones móviles personalizadas, incluyendo arquitectura, diseño, integración con APIs y despliegue en tiendas. Soporte para iOS y Android, pruebas y mantenimiento continuo.",
    category: "64a1f3b2e4c5d6f700000013",
    plans: ["64a1f3b2e4c5d6f700000021", "64a1f3b2e4c5d6f700000023"],
    owner: "64a1f3b2e4c5d6f700000004",
    image: "https://placehold.co/500x200?text=Mobile",
  },
  {
    _id: "64a1f3b2e4c5d6f700000036",
    name: "Auditoría de seguridad",
    shortDescription:
      "Evaluación de seguridad, pruebas de penetración y recomendaciones para hardened infraestructura",
    longDescription:
      "Servicios de auditoría de seguridad que incluyen análisis de vulnerabilidades, pruebas de penetración, revisión de configuraciones y recomendaciones para mitigar riesgos. Entrega de informe detallado con prioridades y plan de remediación.",
    category: "64a1f3b2e4c5d6f700000014",
    plans: ["64a1f3b2e4c5d6f700000022", "64a1f3b2e4c5d6f700000024"],
    owner: "64a1f3b2e4c5d6f700000005",
    image: "https://placehold.co/500x200?text=Security",
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
