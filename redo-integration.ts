interface TestResultR{
    testNameR:string;
    passedR : boolean;
    durationR? : number;
}

function summariseTestsR(test : TestResultR) :string{
    if(test.passedR){
        return `${test.testNameR} test : PASS (${test.durationR??25000}) ms`;
    }
        return `${test.testNameR} test : FAIL (${test.durationR??42000}) ms`;
}

const loginTest : TestResultR = {
    testNameR : "Login",
    passedR : true,
    durationR : 45000,
}
const addProducTest : TestResultR = {
    testNameR : "Add product",
    passedR : false,
}

const checkoutTest : TestResultR = {
    testNameR : "Checkout",
    passedR : true,
    durationR : 5600,
}

const paymentMethodTest : TestResultR = {
    testNameR : "Select Payment Method",
    passedR : false,
    durationR: 450,

}

const TestsR : TestResultR[] = [loginTest, addProducTest, checkoutTest, paymentMethodTest];

console.log(summariseTestsR(loginTest));
console.log(summariseTestsR(addProducTest));


function getFailuresR(tests : TestResultR[]) : TestResultR[]{
    return tests.filter(tc=> !tc.passedR);

}   

// Simpler, corrected version
const failuresR: TestResultR[] = getFailuresR(TestsR);
console.log(`Total failures: ${failuresR.length}`);
failuresR.forEach(t => console.log(`Failed: ${t.testNameR}`));



async function getStatus(): Promise<string>{
    return new Promise<string>((resolve) => setTimeout(() => resolve("up"), 100));
    
}

async function runStatus() {
    console.log("checking API...");
     console.log("API status:" ,await getStatus());

}

runStatus();