

// inheritance: a child can access all from parent class
// multiple inheritanc not allowed, multiple class not extended 

class Truck {
    loading(): void {
        console.log('truck loading');
    }
}

class Car {
    start(): void {
        console.log('car -- start');
    }
    stop(): void {
        console.log('car -- stop');
    }
    refuel(): void {
        console.log('car -- refuel');
    }
}

class BMW extends Car {
    override start(): void {
        console.log('bmw -- start');
    }

    autoParking(): void {
        console.log('bmw --  auto parking');
    }
}

let bmw: BMW = new BMW(); // new BMW is object, bmw is reference variable and BMW is type

console.log(bmw);

bmw.start();
bmw.refuel();
bmw.stop();
bmw.autoParking();

console.log('-----------');

let car: Car = new Car(); // car is reference type, reference type is Car, new Car is object

car.start();
car.refuel();
car.stop();

// top casting:
// child class object can referred by parent class reference variable:

let c: Car = new BMW();
c.start();
c.refuel();
c.stop();

// down casting:
// parent class object can be referred by child class reference variable:
//let b: BMW = new Car();
// down casting not allowed


