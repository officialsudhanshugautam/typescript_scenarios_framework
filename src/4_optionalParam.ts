

// optional param:
// not mandatory to pass the value for the optional param
// optional param should be written at the last after the required params
// it should be written with "?"

function getBilling(foodBill: number, tax?: number, vat?: number): void {

    if(tax && vat) {
        console.log(foodBill + tax);
    }
    else if (tax) {
        console.log(foodBill + tax);
    }
    else {
        console.log(foodBill);
    }
}

getBilling(1000);

getBilling(1000, 20);

getBilling(1000, 20, 50); 

// can we have optional param with default value? but we can update default value

function calcPrice(amount: number, discount: number = 0, vat: number = 50): number {
    return amount - (amount * discount) / 100;
}

let t1 = calcPrice(1000);
console.log(t1);

let t2 = calcPrice(100, 5);
console.log(t2);