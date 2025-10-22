// Objects
const car = {
  type: "Citroen",
  model: "C4X",
  color: "Eclipse Blue",
  horsePower: 131,
};

const person = {
  firstName: "Pesho",
  lastName: "Peshov",
  address: "bul. Pesho 12",
  age: 35,
  hobbies: ["football", "basketball", "swimming"],
  displayInfo: () => {
    console.log(person.firstName, person.lastName, person.age);
  },
};

// Properties access
console.log(person.firstName);
console.log(person["firstName"]);

person.displayInfo();
person["displayInfo"]();

person.firstName = "Yordan";

// Explicit Typing
const car2: {
  type: string;
  model: string;
  horsePower?: number;
} = {
  type: "BMW",
  model: "320",
  horsePower: 150,
};

// Interfaces
interface Car extends Transmission {
  readonly type: string;
  model: string;
  color: string;
  horsePower?: number;
  displayInfo: () => void;
}

const bmw: Car = {
  type: "sedan",
  model: "340a",
  color: "red",
  horsePower: 341,
  trans: "manual",
  displayInfo: function () {
    console.log(bmw.type, bmw.model);
  },
};

interface Transmission {
  trans: string;
}

// Extends
interface User {
  name: string;
  email: string;
  role: string;
  job: string;
}

interface UserPermission extends User {
  permissions: string;
}

const firstUser: UserPermission = {
  name: "Tom",
  email: "tom@email.com",
  role: "superuser",
  job: "QA",
  permissions: "dennied",
};
