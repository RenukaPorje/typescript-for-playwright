//  1. A generic function — one function, any type 

function getFirst<T>(items: T[]): T {
  return items[0];
}

const firstString = getFirst(["Login", "Logout", "Search"]);
console.log(firstString);  // "Login" — TypeScript knows this is a string

const firstNumber = getFirst([200, 404, 500]);
console.log(firstNumber);  // 200 — TypeScript knows this is a number


//  2. You've been using generics already 

// Promise<string> — a generic you used in 7.7
async function fetchTitle(): Promise<string> {
  return "Dashboard";
}

// Array<number> — same as number[]
const codes: Array<number> = [200, 301, 404];
console.log(codes);


//  3. Generic function with an interface 

interface TestResult3 {
  name: string;
  passed: boolean;
}

function getLast<T>(items: T[]): T {
  return items[items.length - 1];
}

const results: TestResult3[] = [
  { name: "Login", passed: true },
  { name: "Checkout", passed: false }
];

const last = getLast(results);
console.log(last.name);    // "Checkout" — TS knows this is a TestResult3
console.log(last.passed);  // false


//  4. Reading generics in library code 
// You won't write these — but you'll see them in Playwright's types:
//
//   page.textContent(selector: string): Promise<string | null>
//   page.locator(selector).all(): Promise<Locator[]>
//
// Now you know: Promise<string | null> means
// "a Promise that resolves to either a string or null"