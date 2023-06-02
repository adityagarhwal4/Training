// Basic types
let id: number = 7;
let company: string = "Reliance";
let isPublished: boolean = true;
let x: any = 'Hello';

let arr1: number[] = [1,2,3,4,5];
let arr2: any[] = [1,true,3,'hello',5];

// Tuple
let person: [number, string, boolean] = [1, 'hello', true];

// Tuple Array
let employee: [number, string][];
employee = [
    [1, 'Aditya'],
    [2, 'Sumit'],
    [3, 'Deepak']
]

// union
let productId: number | string;
productId = '22';

// enum
enum Direction1 {
    up = 'up',
    down = 'down',
    right = 'right',
    left = 'left',
}
// console.log(Direction1.up);

// Objects
type user = {
    id: number,
    name: string
}
const user: user = {
    id: 1,
    name: "John"
}

// Type Assertion
let cid: any = 22;
// first way
// let customerId = <number>cid;

// second way
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number{
    return x + y;
}
// console.log(addNum(2,3));

// Void
function log(message: string | number): void{
    console.log(message);
}
// log('How are you');

// InterFaces
interface userInterface {
    id: number,
    name: string
}
const user1: userInterface = {
    id: 1,
    name: 'Aditya'
}

// interface with arrow function
interface Mathfunc {
    (x: number, y: number): number
}
const add = (x: number, y: number): number => {
    return x + y;
}
const sub: Mathfunc = (x, y) => {
    return x - y;
}

// classes
interface PersonInterface{
    id: number,
    name: string,
    register(): string
}
class Person implements PersonInterface{
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    register(){
        return `${this.name} is now registered.`;
    }
}

const brad = new Person(1, 'Brad Wick');
const mike = new Person(2, 'Mike Jorden');
// console.log(brad, mike)
// console.log(brad.register());

// Extends the class or subclasses
class Employee extends Person{
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(6, 'Shawn', 'Developer');
// console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['Aditya', 'Sumit', 'Deepak']);

numArray.push(2);