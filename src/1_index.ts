
// typescript
// helpful for writing down the code
// purpose: to write better the code in beginning itself
// static language
// compile launguage
// TS --> JS --> result

let x: number = 10;
console.log(x);

// x = 'sudhanshu'; // showing error while writing code/ or called compile time error

let name: string = 'sudhanshu';

// name = 10; // it will show 10 as output due to compilation at JS as TS --> JS --> result

console.log(name);
console.log(typeof name);

let status: boolean = true;

console.log(status);
console.log(typeof status);

// name: addition
// params: 2(x: number, y: number)
// return type: number
function addition(x: number, y: number): number {
    return x + y;
}

console.log(addition(100, 200));

//console.log(addition(100, 'sudhanshu')); // showing error but it should give output as concat

console.log(typeof addition);

function getTrainerName():string {
    return 'Naveen';
}

getTrainerName();

function printData(): void {
    console.log('print user data');
}

printData();

function getNumbers(): number[] {
    return [10, 20, 30];
}

getNumbers();

let sub = (a: number, b: number) => a - b;

let t1: number = sub(100, 50);
console.log(t1);
