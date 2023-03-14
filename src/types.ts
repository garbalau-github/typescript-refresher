/** TYPES */

//* Basic Types
let sales: number = 400;
let course: string = 'TypeScript';
let isPublished: boolean = true;
let level;

//* Arrays
let numbers: number[] = [];

//* Tuple (two element array)
let user: [number, string] = [0, 'Nick'];

//* Enums (list of related constants)
const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}

//* Functions
function calculateTax(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  } else {
    return income * 1.3;
  }
}

//* Objects & Custom Types
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: 'Nick',
  retire: (date: Date) => {
    console.log(date);
  },
};

//* Union Types
function kgToLbs(weight: number | string): number {
  // Narrowing Union type
  if (typeof weight === 'number') {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}
kgToLbs(10);
kgToLbs('10');

//* Intersection Types
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {
    console.log('Drag');
  },
  resize: () => {
    console.log('Resize');
  },
};

//* Literal Types (exact or specific value)
type Metric = 'cm' | 'inch';
type Quantity = 50 | 100;
let quantity: Quantity = 50;
let measurements: Quantity = 100;

//* Nullable Types
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Hola!');
  }
}

greet('Nick');
greet(null);
greet(undefined);

//* Optional Properties
type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null {
  if (id === 0) {
    return null;
  } else {
    return {
      birthday: new Date(),
    };
  }
}

let customer = getCustomer(1);

// Optional Property Access Operator
console.log(customer?.birthday?.getFullYear());

// Optional Element Access Operator
let customers = [customer];
console.log(customers?.[0]);

// Optional Call Operator
let logger: any = null;
logger?.('a');

//* Nullish Coaelscing Operator
let speed: number | null = null;
let ride = {
  // Falsy values (undefined, null, '', false, 0)
  // speed: speed !== null ? speed : 30,
  // Nullish Coaelscing Operator (value can be null or undefined)
  speed: speed ?? 30,
};

//* Type Assertions
let phone = document.getElementById('phone') as HTMLInputElement;
// OR
let email = <HTMLInputElement>document.getElementById('email');
// HTMLElement (any kind of element, like a base class)
// HTMLInputElement (has extra property, like .value for example)
// Now we can do -> phone.value

//* Unknown Type
function render(document: unknown) {
  // Narrowing potential errors
  if (typeof document === 'string') {
    document.toUpperCase();
  }
  // document.move();
  // document.fly();
  // document.whateverWeWant();
}

//* Never Type (quite rare)
function processEvents(): never {
  while (true) {
    // Read a message from the queue
  }
}
// Function will never return
processEvents();
// Not going to get executed
console.log('This line will never be executed');
