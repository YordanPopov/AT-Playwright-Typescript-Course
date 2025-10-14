// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMsg: string = "Welcome!";
//welcomeMsg = "Welcome, Peter";

// string
let message: string = "Hello, Peter!";
let messageLength: number = message.length;
console.log(messageLength);

// string interpolation
let welcomeMessageDetails: string = `Text message length is ${messageLength}`;
console.log(welcomeMessageDetails);

// number and number operations
let numberOne: number = 10;
let numberTwo: number = 5;

let add: number = numberOne + numberTwo;
let sub: number = numberOne - numberTwo;
let multiply: number = numberOne * numberTwo;
let divide: number = numberOne / numberTwo;

// boolean
let areEqual: boolean = numberOne === numberTwo;

// let logical operators
let areEqualTo: boolean = numberOne === 10 && numberTwo === 5;

let test = 5 > 6 ? true : false;