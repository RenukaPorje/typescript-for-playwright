// --- Where inference works (no annotation needed) ---
const testSuiteName = "Regression";        // TS infers: string
const timeoutInMs = 5000;                  // TS infers: number
const hasItPassed = true;                // TS infers: boolean
const testCaseNames = ["login", "signup"]; // TS infers: string[]

console.log(typeof testSuiteName);   // "string"
console.log(typeof timeoutInMs);     // "number"
console.log(typeof hasItPassed);   // "boolean"
console.log(Array.isArray(testCaseNames)); // true

// --- Inference also enforces ---
//testSuiteName = 42;  // ERROR: Type 'number' is not assignable to type 'string'

// --- Where inference does NOT work: function parameters ---
function getTestCaseName(name: string): string {
  return name.toUpperCase();
}

console.log(getTestCaseName("login test"));



//independent ex
const envName = "Production";
const retryCount = 3;
const isRunning = true;
const browserNames = ["Chrome", "Firefox", "Microsoft Egde", "Safari"];
let testerName = "Renuka";


console.log(typeof envName);   // "string"
console.log(typeof retryCount);     // "number"
console.log(typeof isRunning);   // "boolean"
console.log(Array.isArray(browserNames)); // true
console.log(typeof testerName);


//testerName = ["Test123", "tester567"];