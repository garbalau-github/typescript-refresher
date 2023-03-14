/** Classes & Interfaces */

//* Class
class Account {
  public nickname?: string;

  // Parameter properties
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  // Getters & Setters
  get balance(): number {
    return this._balance;
  }

  // set balance(value: number) {
  //   if (value < 0) {
  //     throw new Error('Invalid value!');
  //   } else {
  //     this._balance = value;
  //   }
  // }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Invalid amount!');
    } else {
      this._balance += amount;
    }
  }
}

// Creating objects
let account = new Account(1, 'Nick', 0);
account.deposit(200);
console.log(typeof account, account instanceof Account);
console.log(account.balance);

//* Dynamic Properties (index signatures)
class SeatAssignment {
  // A1 - Mosh, A2 - Josh, ...
  // Index Signature Property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
// Dot Notation
seats.A1 = 'Mosh';
seats.A2 = 'Josh';
// Square Bracket Notation
seats['A3'] = 'Nick';
seats['A4'] = 'Anastasia';

//* Static Members
class Ride {
  private static _activeRides: number = 0;

  static get activeRides(): number {
    return Ride._activeRides;
  }

  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
}

let ride1 = new Ride();
let ride2 = new Ride();

// Each object is independent, in separate space in memory
ride1.start();
ride2.start();
console.log(Ride.activeRides); // 2 (active rides)

//* Inheritance
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  // Can access anywhere in class, but not outside (also inherited to children)
  protected walk() {
    console.log('Walking...');
  }
}

// Inheritance
class Student extends Person {
  constructor(
    public studentId: number,
    public firstName: string,
    public lastName: string
  ) {
    // Reference base class (call its constructor)
    super(firstName, lastName);
  }

  takeTest() {
    console.log('Taking a test...');
  }
}

class Teacher extends Person {
  // Overriding method
  override get fullName(): string {
    return `Professor ${super.fullName}`;
  }
}

class Principal extends Person {
  // Overriding method
  override get fullName(): string {
    return `Principal ${super.fullName}`;
  }
}

let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName); // Professor John Smith

//* Polymorhpism
function printNames(people: Person[]) {
  // `person` takes different forms (Student, Teacher)
  for (let person of people) {
    console.log(person.fullName);
  }
}

// Polymorphic logs
printNames([
  new Student(1, 'Nick', 'Garbalau'),
  new Teacher('Mosh', 'Hamedani'),
  new Principal('Marry', 'Poppins'),
]);

//* Abstract Classes (stop of being able to create instance)
abstract class Shape {
  constructor(public color: string) {}

  // Can only exist inside abstract classes
  abstract render(): void;
}

// Another class need to extend it, because Shape is not complete, "uncooked meal"
class Circle extends Shape {
  constructor(public radius: number, public color: string) {
    super(color);
  }

  override render(): void {
    console.log('Rendering a circle!');
  }
}

// Potential error
// let shape = new Shape('red');
// shape.render();

//* Interfaces (blueprints for creating objects)

// Abstract Version
abstract class AbstractCalendar {
  constructor(public name: string) {}

  abstract addEvent(): void;
  abstract removeEvent(): void;
}

// Interface Version
interface ICalendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends ICalendar {
  sync(): void;
}

class GoogleCalendar implements ICalendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error('Method not implemented.');
  }
  removeEvent(): void {
    throw new Error('Method not implemented.');
  }
}
