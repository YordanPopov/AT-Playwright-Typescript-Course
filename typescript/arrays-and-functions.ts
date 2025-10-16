let stringsArray: string[] = ["Pesho", "Gosho", "Patkan"];
let combinedArray: (string | number)[] = [1, "Pesho", "Ivan", 2];
let numbers: number[] = [5, 2, 4, 8, 16];

// access element by index
stringsArray[0];
combinedArray[2];

// array methods
let multiplyNums = numbers.map((x) => x * 2);
let mapNames = stringsArray.map((currentName) => `Hello ${currentName}`);
let checkTypeOf = combinedArray.map((el) => {
  if (typeof el === "string") {
    `Hello ${el}`;
  }
});

let positiveNumbers: number[] = [1, 2, 3, 4, 5, 6];
let filteredArr = positiveNumbers.filter((num) => num > 3);

function displayPersonalData(name: string, age: number): string {
  return `${name} i ${age} years old.`;
}

// Function
const personalData: string = displayPersonalData("Peter", 25);

// Arrow function
const sumNums = (a: number, b: number): number => a + b;

// Optional Parameters
function greet(name: string, age?: number): string {
  if (age) {
    return `${name} is ${age} years old.`;
  }

  return `Hello, ${name}!`;
}

// console.log(greet("John", 12));
// console.log(greet("Smith", undefined));

// Default parameters
function sum(num1: number = 1, num2: number = 2) {
  return num2 - num1;
}

console.log(sum());
console.log(sum(10));
console.log(sum(undefined, 10));
