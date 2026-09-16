function summarizeTest(testName: string, durationInMs : number) : string {
    return `${testName} completed in ${durationInMs} ms`;
}

console.log(summarizeTest("Add product", 3000))

const isSlowTest = (durationInMs : number): boolean => {
   return durationInMs > 5000;

}

console.log(isSlowTest(4999));

function printResult (testName:string) : void {
    console.log("Passed: ", testName);
}

printResult("Checkout");