/** GENERICS */

//* Generic Classes (same as Template Classes in C++, T for Template)
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pairOne = new KeyValuePair<string, string>('1', 'Apple');
let pairTwo = new KeyValuePair<number, string>(1, 'Apple');

//* Generic Functions (pass anything you want, return specific type)
function wrapInArray<T>(value: T): T[] {
  return [value];
}

let nums = wrapInArray(1);
let strings = wrapInArray('1');

//* Generic Interfaces
interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  console.log(`Fetch to ${url}`);
  return {
    data: null,
    error: null,
  };
}

interface User {
  username: string;
}
interface Product {
  title: string;
}

// Result<User>
let result = fetch<User>('http://website.com/users');
let product = fetch<Product>('http://website.com/products');

//* Generic Constraints

// But how to limit? Use extends!
function echo<T extends number | string>(value: T): T {
  return value;
}

// echo(1);
// echo('1');
// echo(true) // Error

//* Extending Generic Classes
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  private _objects: T[] = [];

  add(object: T): void {
    this._objects.push(object);
  }

  // keyof Operator
  // If T -> Product, then keyof T -> 'name' | 'price'
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((object) => object[property] === value);
  }
}

// Extending (Pass the Generic type parameter)
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// Restricting the Generic type parameter
// class SearchableStore<T extends { name: string }> extends Store<T> {
//   find(name: string): T | undefined {
//     return this._objects.find((object) => object.name === name);
//   }
// }

// Type Mapping
interface Product {
  name: string;
  price: number;
}

// Index Signature + keyof
type ReadOnly<T> = {
  readonly [Property in keyof T]: T[Property];
};

// let entity: ReadOnly<Product> = {
//   name: 'Apple',
//   price: 10,
// };
