

// data types:

// 1. primitive data types

let name: string = 'Tom'; // decide at compile 
let empName = 'Naveen'; // value decide the type and check at runtime
console.log(typeof empName);

let age: number = 30;
console.log(age);

let isActive: boolean = true;
console.log(isActive);

let noValue: null = null;
console.log(noValue);
console.log(typeof noValue);

let notSet: undefined = undefined;
console.log(notSet);
console.log(typeof notSet);
console.log(typeof undefined);

let userName: string;
//console.log(userName); // shows error undefined

userName = 'Naveen Automation Lab';
console.log(userName);

let bigNum: bigint = 90909898989899999n;
console.log(bigNum);

let data: any = 'hello world' // any called any type of data
console.log(data, typeof data);
console.log(data.toUpperCase());

data = 300;
console.log(data, typeof data);


let value: unknown = 'hello'; // unknown called declaring type data as unknown type data
console.log(value, typeof value);

if (typeof value === 'string') { // type check
    console.log(value.toUpperCase());
}

// void : return type of function : does not return any value

function clickOnElement(element: string): void {
    console.log('click on :', element);
}

clickOnElement('loginButton');

// never : function never return (throws the error or infinite loop)

// function throwSomeError(messg: string): never {
//     throw new Error(messg);
// }

// throwSomeError('element not found...');

// function pageLoading(): never {
//     while(true) {
//         console.log('hello world');
//     }
// }

// both below showing invisible code as it's infinite loop code which is suggested by typeScript
// pageLoading();
// console.log('bye');

// array: all the array dynamic in nature

let score = [100, 20, 40];
console.log(score);

let browser: string[] = ['chrome', 'firefox', 'edge'];
console.log(browser.length);

let empIds: (string | number) [] = ['rest101', 100];
console.log(empIds);

let names: string[] = ['tom', 'shilpa', 'manish'];
let empNames: Array<string | number> = ['tom', 'shilpa', 'rajesh', 101];

console.log(names);
console.log(empNames);

console.log(typeof empNames);

// tuple: static array: fixed length: fixed type per position

let userTupple: [string, number, boolean] = ['Ram', 121, true];
console.log(userTupple);

// objects:

let userObj: {name: string | number, age: number, salary: number, active: boolean} = 
{
    name: 'Shilpa',
    age: 35,
    salary: 12.33,
    active: true
}

console.log(userObj);

// enums: collection of the constant values:

enum Status {
    Open, // O -- index
    ReOpen, // 1
    New, // 2
    Closed,
    Assigned,
    Fixed
}

console.log(Status);
console.log(Status.Open); // 0
console.log(Status.Fixed); // 5

enum Browser {
    ch = "chrome",
    ff = "firefox",
    eg = "edge",
    sf = "safari"
}

console.log(Browser);
console.log(Browser.ch);
console.log(Browser.eg);

enum Roles {
    Admin = "Admin",
    Tester = "Tester",
    Dev = "Developer"
}

console.log(Roles.Admin);

// union type:
let userID: string | number = 'test123';
userID = 1000;

// literal types: exact values only

let httpStatusCode: 200 | 400 | 500;

httpStatusCode = 200;
console.log(httpStatusCode);

// httpStatusCode = 100; // showing error as it does not defined

let direction: "left" | "right" | "up" | "down";

// direction = "wrong"; // shows error

// functions:

function getNumber(): number {
    return 100;
}

function getTrainerName(): string | number {
    return 'Tom';
}

function getNumbers(): (string | number)[] {
    return [100, 200, 300]
}

// arrow function:

let addNum = (x: number, y: number): number => x + y;
let r1 = addNum(100, 200);
console.log(r1);

// promises:

function getUserData(): Promise<number | string> {
    return new Promise((resolve, reject) => {
        let flag: boolean = true;
        if (true) {
            resolve(100);
        }
        else {
            reject('400 error');
        }
    });
}

let res = await getUserData();
console.log(res);