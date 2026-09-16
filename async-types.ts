// --- A. Async function returning a value ---
async function getEnvironment(): Promise<string> {
  return "staging";
}

/* // Wrong — TS error: async function must have Promise return type
async function getEnvironment(): string {
  return "staging";
} */


// --- B. Async arrow function returning a value ---
const getTimeout = async (): Promise<number> => {
  return 30000;
};

// --- C. Async function returning nothing (most Playwright actions) ---
async function clickLogin(): Promise<void> {
  console.log("Clicked login button");
}

// --- Calling them with await ---
async function main(): Promise<void> {
  const env = await getEnvironment();
  console.log(env);

  const timeout = await getTimeout();
  console.log(timeout);

  await clickLogin();
}

main();

