import { Role } from "../../enum";
import { UserModel } from "../../modules/users/user.model";

export const usersMock = [
  {
    _id: "64a1f3b2e4c5d6f700000001",
    firstName: "Franco",
    lastName: "Spinelli",
    email: "francospinelli2903@gmail.com",
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
    image: "https://i.pravatar.cc/300?img=2",
    role: Role.CLIENT,
  },
  {
    _id: "64a1f3b2e4c5d6f700000003",
    firstName: "Enzo",
    lastName: "Olmedo",
    email: "enzoolmedo@gmail.com",
    password: "$2b$10$Mk0HHLT7nP0HdM8L.P1bYe/TwNq3XkJX0JK0J2CV0KiI7QulRKQ7W",
    image: "https://i.pravatar.cc/300?img=3",
    role: Role.CLIENT,
  },
  {
    _id: "64a1f3b2e4c5d6f700000004",
    firstName: "Tomas",
    lastName: "Vignau",
    email: "tomasvignau@gmail.com",
    password: "$2b$10$Mk0HHLT7nP0HdM8L.P1bYe/TwNq3XkJX0JK0J2CV0KiI7QulRKQ7W",
    image: "https://i.pravatar.cc/300?img=4",
    role: Role.CLIENT,
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