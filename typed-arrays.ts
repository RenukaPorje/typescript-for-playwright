//  1. Define the shape, then make an array of it 

interface TestCaseA {
  id: number;
  name: string;
  passed: boolean;
  duration?: number;   // optional — not every test tracks this
}

const resultsA: TestCaseA[] = [
  { id: 1, name: "Login",    passed: true,  duration: 1200 },
  { id: 2, name: "Checkout", passed: false },
  { id: 3, name: "Search",   passed: true,  duration: 800 }
];


//  2. Array methods are fully typed now 

// filter — TS knows each item is a TestCaseA
const failures = resultsA.filter(tc => tc.passed === false);
console.log("Failures:", failures); //output - test case id:2


// find — returns TestCase | undefined (might not exist)
const loginA = resultsA.find(tc => tc.name === "Login");
if (loginA !== undefined) {
  console.log("Login duration:", loginA.duration);  // 1200
}

// map — TS knows the output shape
const namesA: string[] = resultsA.map(tc => tc.name);
console.log("Test names:", namesA);  // ["Login", "Checkout", "Search"]


//  3. Push must match the shape 

resultsA.push({ id: 4, name: "Logout", passed: true });  // works

//resultsA.push({ id: 5, title: "Profile" });
// output: 'title' does not exist, 'passed' is missing


//  4. Function that takes a typed array 

function summarise(tests: TestCaseA[]): string {
  const total = tests.length;
  const passed = tests.filter(t => t.passed).length;
  return `${passed}/${total} passed`;
}

console.log(summarise(resultsA));  // "3/4 passed"


//  5. Function that returns a typed array  

function getFailedTests(tests: TestCaseA[]): TestCaseA[] {
  return tests.filter(t => !t.passed);
}

const failed = getFailedTests(resultsA);
console.log("Failed tests:", failed.map(t => t.name));  // ["Checkout"]