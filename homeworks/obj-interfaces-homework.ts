interface Person {
  name: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: number;
}

interface PersonInfo extends Person {
  country?: string;
  greeting?: () => string;
}

const person: Person = {
  name: "John",
  lastName: "Smith",
  age: 33,
  email: "m_example@email.com",
  phoneNumber: 1234567890,
};

const person2: PersonInfo = {
  name: "Anna",
  lastName: "Doe",
  age: 30,
  email: "f_example@email.com",
  phoneNumber: 9876543210,
  country: "USA",
  greeting: function (): string {
    return `Welcome, ${this.name} ${this.lastName}!`;
  },
};

//console.log(person2.greeting?.());
