"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    get balance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount!');
        }
        else {
            this._balance += amount;
        }
    }
}
let account = new Account(1, 'Nick', 0);
account.deposit(200);
console.log(typeof account, account instanceof Account);
console.log(account.balance);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = 'Mosh';
seats.A2 = 'Josh';
seats['A3'] = 'Nick';
seats['A4'] = 'Anastasia';
class Ride {
    static get activeRides() {
        return Ride._activeRides;
    }
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
let ride2 = new Ride();
ride1.start();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log('Walking...');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    takeTest() {
        console.log('Taking a test...');
    }
}
class Teacher extends Person {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
class Principal extends Person {
    get fullName() {
        return `Principal ${super.fullName}`;
    }
}
let teacher = new Teacher('John', 'Smith');
console.log(teacher.fullName);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([
    new Student(1, 'Nick', 'Garbalau'),
    new Teacher('Mosh', 'Hamedani'),
    new Principal('Marry', 'Poppins'),
]);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
        this.color = color;
    }
    render() {
        console.log('Rendering a circle!');
    }
}
class AbstractCalendar {
    constructor(name) {
        this.name = name;
    }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error('Method not implemented.');
    }
    removeEvent() {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=classes.js.map