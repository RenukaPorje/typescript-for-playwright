//enum
enum TestStatusI{
    pass = "PASS",
    fail = "FAIL",
    skip = "SKIP"
}

//interface

interface TestResultI{
    testNameI:string;
    statusI: TestStatusI; //enum
    durationI: number;
    errorMessageI?: string;
}

interface TestConfigI{
    readonly projectNameI:string;
    baseUrlI: string; 
    timeoutI: number;
    retriesI?: number;
}

class TestSuite {
    readonly nameI;
    private resultsI : TestResultI[] = [];
    constructor (name: string){
        this.nameI = name;
    }

    addResultI (tests : TestResultI) : void {
        this.resultsI.push(tests);
    }

    getFailuresI() : TestResultI[] {
        return this.resultsI.filter(tc => tc.statusI===TestStatusI.fail);
    
    }

    findTestI(name : string) : TestResultI | undefined {
        return this.resultsI.find(tc =>tc.testNameI === name);
    }
}

function describeInput (input : string | number | boolean ){
    if (typeof input === "string"){
        return `Text input: "${input}"`;
    }
    else if (typeof input === "number"){
       return `Numeric input: ${input}`;
    }else {
    return `Boolean input: ${input}`;
  }
}

  async function runTest(testName: string, shouldPass: boolean): Promise<TestResultI> {
    await new Promise<void>((resolve) => setTimeout(resolve, 100));
    if (shouldPass){
        return {
            testNameI: testName,
            statusI: TestStatusI.pass,
            durationI: 150
        }; 
    } 
    {
        return {
            testNameI: testName,
            statusI: TestStatusI.fail,
            durationI: 150,
            errorMessageI: testName + " failed",
        };
    }
    
  }
  function getConfigFromJSON(): TestConfigI {
        const raw: unknown = {
            projectNameI: "E-Commerce Tests",
            baseUrlI: "https://example.com",
            timeoutI: 30000,
            retriesI: 2
        };

        return raw as TestConfigI;
  }

    function getConfigFromJSONI(): TestConfigI {
    const raw: unknown = {
        projectNameI: "E-Commerce Tests",
        baseUrlI: "https://example.com",
        timeoutI: 30000,
        retriesI: 2
    };

    const config = raw as TestConfigI;
    return config;
    }

    async function mainI(): Promise<void> {
    // 1. Config
    const config: TestConfigI = getConfigFromJSON();
    console.log(config.projectNameI);

    // 2. Describe inputs
    console.log(describeInput("admin@test.com"));
    console.log(describeInput(42));
    console.log(describeInput(true));

    // 3. Create suite + run tests
    const suite = new TestSuite("Smoke Tests");
    const test1: TestResultI = await runTest("Login works", true);
    const test2: TestResultI = await runTest("Search works", true);
    const test3: TestResultI = await runTest("Checkout crashes", false);
    // 4. Add all 3 results to the suite
    suite.addResultI(test1);
    suite.addResultI(test2);
    suite.addResultI(test3);

    // 5. Get failures and log them
    const failures: TestResultI[] = suite.getFailuresI();
    failures.forEach((f: TestResultI): void => {
        console.log(`FAILED: ${f.testNameI} — ${f.errorMessageI}`);
    });

    // 6. Find a test that exists — check for undefined
    const found: TestResultI | undefined = suite.findTestI("Login works");
    if (found !== undefined) {
        console.log(`Found: ${found.testNameI} — ${found.statusI}`);
    }

    // Find a test that doesn't exist — handle undefined
    const missing: TestResultI | undefined = suite.findTestI("Nonexistent test");
    if (missing !== undefined) {
        console.log(missing.testNameI);
    } else {
        console.log("Test not found");
    }

    }
    mainI();