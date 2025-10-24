export type Category = "food" | "clothes" | "electronics";

export interface Product {
  name: string;
  price: number;
  category: Category;
}

export interface Customer {
  name: string;
  email: string;
  cart: Product[];
}
