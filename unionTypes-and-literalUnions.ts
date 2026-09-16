// literal union — only these three exact strings are allowed
type TestStatus = "passed" | "failed" | "skipped";

// status parameter is TestStatus, not string — typos are compile errors
function logResult(testName: string, status: TestStatus): void {
  console.log(`${testName}: ${status}`);
}

logResult("Login Test", "passed");
logResult("Cart Test", "failed");
logResult("Payment Test", "skipped");

// logResult("Search Test", "passsed");  // Compile error: not assignable to TestStatus

// same pattern — four exact strings allowed
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function describeRequest(method: HttpMethod, url: string): void {
  console.log(`${method} ${url}`);
}

describeRequest("GET", "/users");
describeRequest("POST", "/login");

// non-literal union — accepts either string or number, not just one
function printId(id: string | number): void {
  console.log(`ID: ${id}`);
}

printId("abc-123");
printId(42);
//printId(true); //Argument of type 'boolean' is not assignable to parameter of type 'string | number'