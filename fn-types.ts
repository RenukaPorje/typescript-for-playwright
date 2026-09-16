// --- A. Typed parameters ---
function formatTestResult(testName: string, passed: boolean): string {
  // ternary: if passed is true, "PASSED"; otherwise "FAILED"
  const status = passed ? "PASSED" : "FAILED";
  return `${testName}: ${status}`;
}

console.log(formatTestResult("Login Test", true));
console.log(formatTestResult("Cart Test", false));

// --- B. Why return types matter ---
// : number after () means this function promises to return a number
// if you accidentally returned a string inside, TS would catch it here
function getRetryCount(env: string): number {
  if (env === "CI") {
    return 3;
  }
  return 1;
}

console.log(getRetryCount("CI"));
console.log(getRetryCount("local"));

// --- C. Arrow function with types ---
// arrow form: (param: type): returnType => { body }
const getBrowserName = (index: number): string => {
  const browsers = ["chromium", "firefox", "webkit"];
  // ?? — if browsers[index] is undefined (out of range), use "chromium"
  return browsers[index] ?? "chromium";
};

console.log(getBrowserName(0));
console.log(getBrowserName(5));

// --- D. void — function that doesn't return anything ---
// void means: this function does something but gives nothing back
function logStart(suiteName: string): void {
  console.log(`Starting suite: ${suiteName}`);
}

logStart("Regression");

