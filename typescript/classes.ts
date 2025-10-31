class Person {
  constructor(protected readonly name: string, protected readonly age: number) {
    this.name = name;
    this.age = age;
  }

  protected introduce(): void {
    console.log(`Hi, I'm ${this.name} and I am ${this.age} years old!`);
    console.log(this.secretMessage());
  }

  private secretMessage(): void {
    console.log(`This message is private!`);
  }
}

const person1 = new Person("Alice", 30);

class User {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  intro(): void {
    console.log(`Hi, my name is ${this.name}!`);
  }
}

class UserDetails extends User {
  constructor(name: string) {
    super(name);
  }

  showDetails(): void {
    console.log(`My name is ${this.name}!`);
  }
}

const user = new UserDetails("Pesho");
user.intro();
user.showDetails();

class ProtectedPerson extends Person {
  constructor(name: string, age: number) {
    super(name, age);
  }

  protected getProtectedData(): void {
    console.log(`${this.name} -> ${this.age}`);
  }
}

class Student extends ProtectedPerson {
  private grade: number;

  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade;
  }

  showGrade(): void {
    this.introduce();
    console.log(`Grade: ${this.grade.toFixed(2)}`);
  }
}

const student = new Student("Pesho", 22, 6);
student.showGrade();
