console.log("Hello, my first ts code.");

// Basic types
let name: string = "Yordan";
const age: number = 33;
let isTrue: boolean = 5 > 7;

// Arrays
let array1: string[] = ["one", "two", "three"];
let arrya2: number[] = [1, 2, 3];
let array3: (string | number)[] = ["1", 2, "3", "4", 5];

// Tuple - array with fixd number of elements whose types are known
let tuple: [string, number] = ["1", 2];

// Logical Operators
let a: number = 15;
let b: number = 10;

console.log(a > 10 && b > 10); // false
console.log(a < 10 || b === 10); // true
console.log(a !== 15); // false
