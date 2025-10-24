let id: string | number = 101;

function printId(id: string | number): void {
  console.log(`Id - ${id} is type of ${typeof id}`);
}

printId(1);
printId("#1");

interface Product {
  name: string;
  price: number;
  getTotalPrice: (qty: number) => number;
}

const phone: Product = {
  name: "Samsung",
  price: 1240,
  getTotalPrice: function (qty: number) {
    return this.price * qty;
  },
};

function orderDetails(qty: number, product: Product) {
  console.log(`Order for: ${product.name}`);
  console.log(`Product quantity: ${qty}`);
  console.log(`Product unit price: ${product.price}$`);
  console.log(`Total price: ${product.getTotalPrice(qty)}$`);
}

orderDetails(5, phone);

// type alias
type EmployeeName = string;
type EmpoyeeId = number;

type Result = string | number | null;
let data: Result = "Test";

// -----------------------------
type PaymentMethod = "Card" | "Cash" | "Crypto";

function paymentDetails(amount: number, method: PaymentMethod) {
  switch (method.toLowerCase()) {
    case "card":
      return amount * 5;
      break;
    case "cash":
      return amount * 10;
      break;
    case "crypto":
      return amount * 20;
      break;
    default:
      throw new Error(`Invalid payment method: ${method}`);
  }
}
