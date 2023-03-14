"use strict";
var _a;
let sales = 400;
let course = 'TypeScript';
let isPublished = true;
let level;
let numbers = [];
let user = [0, 'Nick'];
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
let employee = {
    id: 1,
    name: 'Nick',
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10');
let textBox = {
    drag: () => {
        console.log('Drag');
    },
    resize: () => {
        console.log('Resize');
    },
};
let quantity = 50;
let measurements = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Hola!');
    }
}
greet('Nick');
greet(null);
greet(undefined);
function getCustomer(id) {
    if (id === 0) {
        return null;
    }
    else {
        return {
            birthday: new Date(),
        };
    }
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customers = [customer];
console.log(customers === null || customers === void 0 ? void 0 : customers[0]);
let logger = null;
logger === null || logger === void 0 ? void 0 : logger('a');
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
let phone = document.getElementById('phone');
let email = document.getElementById('email');
function render(document) {
    if (typeof document === 'string') {
        document.toUpperCase();
    }
}
function processEvents() {
    while (true) {
    }
}
processEvents();
console.log('This line will never be executed');
//# sourceMappingURL=types.js.map