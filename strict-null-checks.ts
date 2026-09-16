// 1. Without the union — TypeScript blocks you 

//let username: string = null;  
// Uncomment to see: Type 'null' is not assignable to type 'string'


//  2. With the union — you declare "this can be absent" 

let username: string | null = null;
console.log("username right now:", username);  // null

username = "tester_01";
console.log("username after assignment:", username);  // "tester_01"


//  3. You MUST narrow before using it 

function getLength(value: string | null): number {
  // return value.length;  
  // Uncomment to see: 'value' is possibly 'null'

  if (value !== null) {
    return value.length;   //  inside this block, TS knows it's string
  }
  return 0;
}

console.log("length of null:", getLength(null));         // 0
console.log("length of 'admin':", getLength("admin"));   // 5


//  4. Optional property — automatically adds undefined 

interface TestConfig {
  baseURL: string;
  timeout?: number;   // same as: number | undefined
}

const config: TestConfig = { baseURL: "https://example.com" };

//const doubled: number = config.timeout * 2;  
// Uncomment to see: 'config.timeout' is possibly 'undefined'

const doubled: number = config.timeout !== undefined ? config.timeout * 2 : 60000;
console.log("timeout doubled:", doubled);  // 60000 (used default)


//  5. Real pattern — simulating page.textContent() 

function fakeTextContent(selector: string): string | null {
  if (selector === ".exists"){
    return "  Login  ";
  }  
  return null;   // element not found
}

const raw = fakeTextContent(".exists");

if (raw !== null) {
  console.log("trimmed text:", raw.trim());   // "Login"
} else {
  console.log("element not found");
}

const missing = fakeTextContent(".gone");

if (missing !== null) {
  console.log("trimmed:", missing.trim());
} else {
  console.log("element not found");           // this prints
}