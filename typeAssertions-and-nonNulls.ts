// assertions.ts

// 1. "as" assertion — you know more than TypeScript
type ApiResponse2 = {
  status: number;
  data: unknown;  // API returns unknown
};

const response: ApiResponse2 = {
  status: 200,
  data: { name: "Login Test", passed: true }
};

// TS only sees "unknown" for data — you know it's this shape
type TestResult2 = { name: string; passed: boolean };

const result = response.data as TestResult2;
console.log(result.name);    // "Login Test"
console.log(result.passed);  // true


// 2. Non-null assertion — you're certain it's not null
const config0: { baseURL?: string } = { baseURL: "https://example.com" };

// TS thinks config.baseURL might be undefined (because of ?)
// You know you set it — the ! tells TS "it's definitely there"
const url: string = config0.baseURL!;
console.log(url);  // "https://example.com"


// 3. Why assertions are dangerous — if you're WRONG
const bad = response.data as number;  // no compile error
// console.log(bad.toFixed(2));  // RUNTIME CRASH — data isn't a number
// TypeScript trusted you and you were wrong 