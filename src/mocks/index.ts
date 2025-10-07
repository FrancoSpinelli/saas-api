import { Period, Role } from "../enum";
import { Plan, Service, Subscription, User } from "../interface";
import { Category } from "../interface/category";

export const usersMock: User[] = [
  {
    id: "1",
    firstName: "Franco",
    lastName: "Spinelli",
    email: "francospinelli2903@gmail.com",
    password: "1234",
    role: Role.ADMIN,
  },
  {
    id: "2",
    firstName: "Santi",
    lastName: "Longo",
    email: "santilongo@gmail.com",
    password: "1234",
    role: Role.CLIENT,
  },
];

export const categoriesMock: Category[] = [
  {
    id: "1",
    name: "Streaming",
    image: "",
  },
  {
    id: "2",
    name: "Software",
    image: "",
  },
  {
    id: "1",
    name: "Curso online",
    image: "",
  },
];

export const plansMock: Plan[] = [
  {
    id: "1",
    period: Period.MONTHLY,
    price: 10,
    active: false,
  },
  {
    id: "2",
    period: Period.QUARTERLY,
    price: 20,
    active: true,
  },
  {
    id: "3",
    period: Period.SEMESTRAL,
    price: 50,
    active: true,
  },
  {
    id: "4",
    period: Period.ANNUAL,
    price: 90,
    active: true,
  },
];

export const servicesMock: Service[] = [
  {
    id: "1",
    name: "Aprendiendo a programar con Franco Spinelli",
    description: "Canal dedicado a la enseñanza de la programación",
    category: categoriesMock[2],
    plans: [plansMock[0], plansMock[1], plansMock[2], plansMock[3]],
    owner: usersMock[0],
  },
];

export const subscriptionsMock: Subscription[] = [
  {
    id: "1",
    client: usersMock[1],
    plan: plansMock[0],
    service: servicesMock[0],
    startDate: new Date(),
    endDate: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    paid: false,
  },
];

export const paymentsMock = [
  {
    id: "1",
    subscription: subscriptionsMock[0],
    amount: subscriptionsMock[0].plan.price,
    date: new Date(),
  },
];
