import { CategoryModel } from "../../modules/categories/categories.model";

export const categoriesMock = [
  {
    _id: "64a1f3b2e4c5d6f700000011",
    name: "Streaming",
    description: "Servicios de transmisión de contenido digital",
    image: "",
  },
  {
    _id: "64a1f3b2e4c5d6f700000012",
    name: "Software",
    description: "Servicios de desarrollo de software",
    image: "",
  },
  {
    _id: "64a1f3b2e4c5d6f700000013",
    name: "Curso online",
    description: "Plataforma de cursos en línea",
    image: "",
  },
];

export async function seedCategories() {
  await CategoryModel.deleteMany({});
  await CategoryModel.insertMany(categoriesMock);
  console.log("✅ Categories seeded");
}

export async function unseedCategories() {
  await CategoryModel.deleteMany({});
  console.log("✅ Categories cleared");
}
