import { ServiceModel } from "../../modules/services/services.model";

export const servicesMock = [
  {
    _id: "64a1f3b2e4c5d6f700000031",
    name: "Aprendiendo a programar con Franco Spinelli",
    description: "Canal dedicado a la enseñanza de la programación",
    category: "64a1f3b2e4c5d6f700000013",
    plans: [
      "64a1f3b2e4c5d6f700000021",
      "64a1f3b2e4c5d6f700000022",
      "64a1f3b2e4c5d6f700000023",
      "64a1f3b2e4c5d6f700000024",
    ],
    owner: "64a1f3b2e4c5d6f700000001",
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