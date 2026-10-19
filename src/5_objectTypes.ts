

// object types:

// type: refer to define the object params type

// contract/ schema for the user
type UserType = {
    name: string,
    age: number,
    salary?: number,
    isActive: boolean
    role?: string
    comp?: 'IBM'
}


let user : UserType // simple way : {name: string, age: number, salary: number, isActive: boolean} 
= {
    name: 'Tom',
    age: 30,
    salary: 40,
    isActive: true,
    role: 'admin',
    //comp: 'Google' // shows error
}

console.log(user);
console.log(typeof user);

let myUser: UserType = {
    name: 'Tom',
    age: 30,
    salary: 40,
    isActive: true,
    role: 'customer'
}

console.log(myUser);
console.log(typeof myUser);

let newUser: UserType = {
    name: 'Ravi',
    age: 30,
    isActive: true
}

console.log(newUser);

// interface: used to create/ define the schema: new way of writing instead using above "type"

interface userSchema {
    name: string,
    age?: number,
    isActive?: boolean
}

let u1: userSchema = {

    name: 'Sudhanshu',
    age: 20,
    isActive: true
}

interface Comp {
    compName: string
}

interface Employee {
    name: string,
    age: number,
    salary: number
}

interface Dept extends Employee, Comp {
    deptName: string,
    head: string
}

let emp: Dept = {
    name: 'tom',
    age: 30,
    salary: 12.33,
    deptName: 'HR',
    head: 'Peter',
    compName: 'IBM'
}

// 

interface Car {
    brand: string
}

interface Car {
    model: string
}

let myCar: Car = {
    brand: 'BMW',
    model: 'x5'
}

console.log(myCar.brand, myCar.model);

//

type Person = {
    name: string
};

type Company = Person & {
    company: string,
    count: number
}

let myEmp: Company = {
    name: 'Ram',
    company: 'google',
    count: 100
}

// 
type Status = 'Pending' | 'Out for delivery' | 'Delivered';

let orderStatus: Status = "Pending";

// type with primitive data

type userID = string | number;
type age = number;

let id: userID = 'pop1212';
let id1: userID = 9001;
let age: age = 20;

// type with tuples:

type Point = [number, number, string];

let p: Point = [10.22, 43.66, 'LA'];

// real time example: in test automation:

// interface for the test config
interface TestConfig {
    testName: string,
    browser: "Chrome" | "Firefox" | "Webkit",
    headless: boolean,
    retries?: number
}

// type for the status:

type TestStatus = "Passed" | "Failed" | "Skipped"

// interface for the test results:
interface TestResult extends TestConfig {
    status: TestStatus,
    duration: number
}

let result: TestResult = {
    status: "Passed",
    duration: 10,
    testName: "Login Test",
    browser: "Chrome",
    headless: false, 
    retries: 3
}

console.log(result);
let resultJSON = JSON.stringify(result, null, 2)
console.log(resultJSON);

// JS --> JSON --> insert SQL --> DB (schema)

interface Browser {
    browserName: string,
    version: number,
    coding(langName: string): void // coding function
    add: (a: number, b: number) => number
}

let chrome: Browser = {
    browserName: 'chrome',
    version: 134,
    coding(langName: string) {
        console.log(`${this.browserName} working with ${langName}.....`)
    },
    add: function (a: number, b: number): number {
        return a + b;
    }
}

chrome.coding('JavaScript');