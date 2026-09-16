// Truthiness narrowing — extremely common in Playwright
function clickIfVisible(selector: string | null) {
  if (selector) {
    // TS knows selector is string (not null)
    console.log(selector.trim());
  }
}

// in operator — checking object shapes
type ApiSuccess = { data: string };
type ApiError = { error: string };
type ApiResponse = ApiSuccess | ApiError;

function handleResponse(res: ApiResponse) {
  if ("error" in res) {
    console.log("Failed:", res.error);  // TS knows it's ApiError
  } else {
    console.log("Data:", res.data);     // TS knows it's ApiSuccess
  }
}