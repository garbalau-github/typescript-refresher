"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pairOne = new KeyValuePair('1', 'Apple');
let pairTwo = new KeyValuePair(1, 'Apple');
function wrapInArray(value) {
    return [value];
}
let nums = wrapInArray(1);
let strings = wrapInArray('1');
function fetch(url) {
    console.log(`Fetch to ${url}`);
    return {
        data: null,
        error: null,
    };
}
let result = fetch('http://website.com/users');
let product = fetch('http://website.com/products');
function echo(value) {
    return value;
}
class Store {
    constructor() {
        this._objects = [];
    }
    add(object) {
        this._objects.push(object);
    }
    find(property, value) {
        return this._objects.find((object) => object[property] === value);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
//# sourceMappingURL=generics.js.map