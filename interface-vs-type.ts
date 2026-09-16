// interface — defines a shape: any object typed as TestResult must match this
interface TestResult {
  testName: string;
  passed: boolean;
  duration: number;
}

// ": TestResult" after the variable name — same as ": string" but your own type
const login: TestResult = {
  testName: "Login Test",
  passed: true,
  duration: 1200,
};

// parameter typed as TestResult — function accepts any object matching that shape
function printTheResult(result: TestResult): void {
  const status = result.passed ? "PASSED" : "FAILED";
  console.log(`${result.testName}: ${status} (${result.duration}ms)`);
}

printTheResult(login);

// extends — inherits all TestResult properties, adds browser on top
interface DetailedResult extends TestResult {
  browser: string;
}

// must provide all 4: 3 inherited + 1 own
const detailed: DetailedResult = {
  testName: "Cart Test",
  passed: false,
  duration: 3400,
  browser: "chromium",
};

// DetailedResult fits where TestResult is expected — subtype is accepted
printTheResult(detailed);
console.log(`Browser: ${detailed.browser}`);

// type alias — same object-shape job, different syntax (= sign, ; at end)
type ApiResponse0 = {
  status: number;
  body: string;
};

const res: ApiResponse0 = {
  status: 200,
  body: "OK",
};

console.log(`${res.status}: ${res.body}`);

// type can define unions — interface cannot do this
type BrowserName = "chromium" | "firefox" | "webkit";

const browser: BrowserName = "firefox";
console.log(browser);

//independent ex

interface ApiEndpoint {
    method:string; 
    url: string; 
    statusCode: number;
}   

const getRequest : ApiEndpoint ={
    method:"get", 
    url: "www.example.com",
    statusCode: 200,
}

const postRequest : ApiEndpoint ={
    method:"post", 
    url: "www.example.com",
    statusCode: 201,
}

interface AuthenticatedEndpoint extends ApiEndpoint{
    token: string;
}

const authObject: AuthenticatedEndpoint = {
    method:"post", 
    url: "www.example.com",
    statusCode: 200,
    token: "abes18797878cdcd8877ddd",
}

function printEndpoint (requestDetails:ApiEndpoint){
    console.log(`${requestDetails.method}/${requestDetails.url} --> ${requestDetails.statusCode}`);
}

printEndpoint(getRequest);
printEndpoint(postRequest);
printEndpoint(authObject);