import type { Customer, Product } from "./types.js";

export const apple: Product = {
  name: "Apple",
  price: 0.5,
  category: "food",
};

export const tShirt: Product = {
  name: "T-Shirt",
  price: 9 / 0.9,
  category: "clothes",
};

export const laptop: Product = {
  name: "Dell",
  price: 1990.9,
  category: "electronics",
};

export const customer: Customer = {
  name: "John Smith",
  email: "john.smith@example.com",
  cart: [apple, tShirt, laptop],
};
