//  1. Basic typed class 

class TestCase0 {
  readonly id: number;
  name: string;
  status: "passed" | "failed" | "skipped";
  duration?: number;

  constructor(id: number, name: string, status: "passed" | "failed" | "skipped") {
    this.id = id;
    this.name = name;
    this.status = status;
  }

  summary(): string {
    return `${this.id}: ${this.name} — ${this.status}`;
  }
}

const tc = new TestCase0(1, "Login", "passed");
console.log(tc.summary());   // "1: Login — passed"
console.log(tc.name);        // "Login"

//tc.id = 99;// Error because it is read-only


//  2. Private properties — encapsulation 

class LoginPageTC {
  private usernameSelector: string;
  private passwordSelector: string;

  constructor(usernameSelector: string, passwordSelector: string) {
    this.usernameSelector = usernameSelector;
    this.passwordSelector = passwordSelector;
  }

  login(user: string, pass: string): string {
    // In real Playwright, this would use page.fill() and page.click()
    return `Filled ${this.usernameSelector} with ${user}, ${this.passwordSelector} with ${pass}`;
  }
}

const page = new LoginPageTC("#username", "#password");
console.log(page.login("admin", "secret"));

//console.log(page.usernameSelector);
//  Erro: Property 'usernameSelector' is private


//  3. Typed class with inheritance 

class BasePage {
  readonly baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  fullURL(path: string): string {
    return `${this.baseURL}${path}`;
  }
}

class DashboardPage extends BasePage {
  private heading: string;

  constructor(baseURL: string, heading: string) {
    super(baseURL);
    this.heading = heading;
  }

  describe(): string {
    return `${this.heading} at ${this.fullURL("/dashboard")}`;
  }
}

const dash = new DashboardPage("https://example.com", "Admin Dashboard");
console.log(dash.describe());    // "Admin Dashboard at https://example.com/dashboard"
console.log(dash.baseURL);       // readonly but readable from outside
//dash.baseURL = "http://other.com";  // readonly — can't change