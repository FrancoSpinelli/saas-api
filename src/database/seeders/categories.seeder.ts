import { CategoryModel } from "../../modules/categories/categories.model";

export const categoriesMock = [
  {
    _id: "64a1f3b2e4c5d6f700000011",
    name: "Streaming",
    image: "",
  },
  {
    _id: "64a1f3b2e4c5d6f700000012",
    name: "Software",
    image: "",
  },
  {
    _id: "64a1f3b2e4c5d6f700000013",
    name: "Curso online",
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