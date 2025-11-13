import { PaymentMethod, Role } from "../../enum";
import { UserModel } from "../../modules/users/user.model";
import { categoriesMock } from "./categories.seeder";

export const usersMock = [
  {
    _id: "64a1f3b2e4c5d6f700000000",
    firstName: "Franco",
    lastName: "Spinelli 1",
    email: "franco.spinelli@alu.inspt.utn.edu.ar",
    description: "Hola! Soy Franco, me apasiona el desarrollo web y el aprendizaje continuo.",
    password: "$2b$10$G0AHYdhIV36QDzmav422BOVLpxZPERMGROM.tua1JqdI88.nbThVq",
    image: "https://i.pravatar.cc/300?img=4",
    role: Role.ADMIN,
  },
  {
    _id: "64a1f3b2e4c5d6f700000001",
    firstName: "Franco",
    lastName: "Spinelli 2",
    email: "francospinelli2903@gmail.com",
    description: "Hola! Soy Franco, me apasiona el desarrollo web y el aprendizaje continuo.",
    password: "$2b$10$G0AHYdhIV36QDzmav422BOVLpxZPERMGROM.tua1JqdI88.nbThVq",
    image: "https://i.pravatar.cc/300?img=1",
    role: Role.ADMIN,
  },
  {
    _id: "64a1f3b2e4c5d6f700000002",
    firstName: "Santi",
    lastName: "Longo",
    email: "santilongo@gmail.com",
    password: "$2b$10$Mk0HHLT7nP0HdM8L.P1bYe/TwNq3XkJX0JK0J2CV0KiI7QulRKQ7W",
    description: "Hola! Soy Santi y me encanta aprender cosas nuevas.",
    image: "https://i.pravatar.cc/300?img=2",
    interests: [categoriesMock[0]._id, categoriesMock[2]._id],
    role: Role.CLIENT,
    paymentMethod: PaymentMethod.CREDIT_CARD,
  },
  {
    _id: "64a1f3b2e4c5d6f700000003",
    firstName: "Enzo",
    lastName: "Olmedo",
    email: "enzoolmedo@gmail.com",
    password: "$2b$10$Mk0HHLT7nP0HdM8L.P1bYe/TwNq3XkJX0JK0J2CV0KiI7QulRKQ7W",
    description: "Hola! Soy Enzo y me encanta aprender cosas nuevas.",
    image: "https://i.pravatar.cc/300?img=3",
    interests: [categoriesMock[1]._id],
    role: Role.CLIENT,
    paymentMethod: PaymentMethod.BANK_TRANSFER,
  },
  {
    _id: "64a1f3b2e4c5d6f700000004",
    firstName: "Tomas",
    lastName: "Vignau",
    email: "tomasvignau@gmail.com",
    password: "$2b$10$Mk0HHLT7nP0HdM8L.P1bYe/TwNq3XkJX0JK0J2CV0KiI7QulRKQ7W",
    description: "Hola! Soy Tomas y me encanta aprender cosas nuevas.",
    image: "https://i.pravatar.cc/300?img=4",
    interests: [categoriesMock[3]._id, categoriesMock[4]._id],
    role: Role.CLIENT,
    paymentMethod: PaymentMethod.BANK_TRANSFER,
  },
];

export async function seedUsers() {
  await UserModel.deleteMany({});
  await UserModel.insertMany(usersMock);
  console.log("✅ Users seeded");
}

export async function unseedUsers() {
  await UserModel.deleteMany({});
  console.log("✅ Users cleared");
}
