// --- optional properties ---
interface TestConfig0 {
  browser: string;
  headless: boolean;
  retries?: number;      // ? makes it optional — object can omit this
}

// no retries property — valid because retries is optional
const defaultConfig: TestConfig0 = {
  browser: "chromium",
  headless: true,
};

// retries provided — also valid
const ciConfig: TestConfig0 = {
  browser: "firefox",
  headless: true,
  retries: 3,
};

function printConfig(config: TestConfig0): void {
  // ?? 1 — if config.retries is undefined (not provided), fall back to 1
  const retries = config.retries ?? 1;
  console.log(`${config.browser} | headless: ${config.headless} | retries: ${retries}`);
}

printConfig(defaultConfig);
printConfig(ciConfig);

// --- readonly ---
interface TestRun {
  readonly id: string;   // readonly — set once at creation, cannot reassign
  status: string;
}

const run: TestRun = {
  id: "run-0042",
  status: "running",
};

console.log(`${run.id}: ${run.status}`);

// status is not readonly — reassignment allowed
run.status = "passed";
console.log(`${run.id}: ${run.status}`);

// run.id = "run-9999";   // Compile error: Cannot assign to 'id' because it is a read-only property