

const suiteName: string = "Regression";
const timeout: number = 5000;
const hasPassed: boolean = true;
const testNames: string[] = ["login", "Add a product", "Increase quantity", "Add voucher", "Redeen Gift card"];


console.log(suiteName);
console.log(timeout);
console.log(hasPassed);
console.log(testNames);

//TS looks at the assigned value and infers the type, so we dont right it explicitly everywhere.
//we take a look at in next few examples