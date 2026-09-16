function getTestName(testCase: { name: string }): string {
  return testCase.name.toUpperCase();
}

console.log(getTestName({ name: "login test" }));