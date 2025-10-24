/**
 * 1.Create an interface Product with the following fields:
 * name: string
 * price: number
 * category: "food" | "clothes" | "electronics"
 * 2.Create a type Category with the possible categories (food, clothes, electronics)
 * 3.Create an interface Customer with the following fields:
 * name: string
 * email: string
 * cart: Product[] — an array containing the products in the customer’s cart
 * 4. Create two example products (e.g., an apple and a T-shirt).
 * 5. Create one customer who has both products
 */
type Category = "food" | "clothes" | "electronics";

interface Product {
  name: string;
  price: number;
  category: Category;
}

interface Customer {
  name: string;
  email: string;
  cart: Product[];
}

const products: Product[] = [
  {
    name: "Apple",
    price: 1.2,
    category: "food",
  },
  {
    name: "T-Shirt",
    price: 7.9,
    category: "clothes",
  },
  {
    name: "Dell",
    price: 1119.9,
    category: "electronics",
  },
];

const customerOne: Customer = {
  name: "John Smith",
  email: "john.smith@example.com",
  cart: products,
};

const customerTwo: Customer = {
  name: "Anna Doe",
  email: "anna.doe@example.com",
  cart: products,
};

function displayCart({ name, cart }: Customer): void {
  console.log(`Cart for customer ${name}`);
  cart.forEach((product, index) => {
    console.log(
      `${index + 1}. ${product.name} - ${product.price}$ - ${product.category}.`
    );
  });
}

function filterByCategory(products: Product[], category: Category): Product[] {
  return products.filter((product) => product.category === category);
}

function calculateTotalPrice({ cart }: Customer): number {
  let totalPrice: number = 0;

  for (const product of cart) {
    totalPrice += product.price;
  }

  return totalPrice;
}

displayCart(customerTwo);
console.log(filterByCategory(products, "food"));
console.log(calculateTotalPrice(customerTwo));
