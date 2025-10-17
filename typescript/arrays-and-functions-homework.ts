// 1.Ex
let stringsArr: string[] = ["first", "second", "third"];
stringsArr.push("fourth");

console.log(stringsArr);

// 2.Ex
let numbers: number[] = [1, 2, 3, 4, 5, 6];
numbers.shift();

console.log(numbers);

// 3.Ex
numbers = [1, 2, 3, 4, 5];
let dividedNumbers = numbers.map((num) => num / 2);

console.log(dividedNumbers);

// 4.Ex
numbers = [3, 7, 1, 9, 12, 4];
let numsGreaterThanFive = numbers.filter((num) => num > 5);

console.log(numsGreaterThanFive);

// Ex.5
numbers = [9, 3, 7, 2, 8, 5];
numbers.sort((num1, num2) => num1 - num2);

console.log(numbers);

// Ex.6
stringsArr = ["apple", "banana", "cherry", "date", "elderberry"];
stringsArr = stringsArr.slice(0, 3);

console.log(stringsArr);

// Ex.7
stringsArr = ["car", "bike", "bus", "train", "boat"];
stringsArr.splice(1, 2);

console.log(stringsArr);

// Ex.8
function findLargest(num1: number, num2: number, num3: number): number {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

console.log(findLargest(1, 0, -1));

// Ex.9
function convertToCentimeters(inches: number = 1): number {
  return inches * 2.54;
}

console.log(convertToCentimeters());
console.log(convertToCentimeters(10));

// Ex.10
function calculateArea(width: number, height?: number): number {
  if (height !== undefined) {
    return height * width;
  } else {
    return width * width;
  }
}

console.log(calculateArea(5, 2));
console.log(calculateArea(5));
