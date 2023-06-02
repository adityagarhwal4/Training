"use strict";
// Basic types
let id = 7;
let company = "Reliance";
let isPublished = true;
let x = 'Hello';
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, true, 3, 'hello', 5];
// Tuple
let person = [1, 'hello', true];
// Tuple Array
let employee;
employee = [
    [1, 'Aditya'],
    [2, 'Sumit'],
    [3, 'Deepak']
];
// union
let productId;
productId = '22';
// enum
var Direction1;
(function (Direction1) {
    Direction1["up"] = "up";
    Direction1["down"] = "down";
    Direction1["right"] = "right";
    Direction1["left"] = "left";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: "John"
};
// Type Assertion
let cid = 22;
// first way
// let customerId = <number>cid;
// second way
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(2,3));
// Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Aditya'
};
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x - y;
};
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const brad = new Person(1, 'Brad Wick');
const mike = new Person(2, 'Mike Jorden');
// console.log(brad, mike)
// console.log(brad.register());
// Extends the class or subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(6, 'Shawn', 'Developer');
// console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Aditya', 'Sumit', 'Deepak']);
numArray.push(2);
