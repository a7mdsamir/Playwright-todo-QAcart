import { Page } from "@playwright/test";

export class LoginPage {
constructor(private page: Page) {}

private emailInput = this.page.locator("#email");
private passwordInput = this.page.getByTestId("password");
private loginBtn = this.page.getByTestId("login");

async goto() {
await this.page.goto("https://qacart-todo.herokuapp.com/login");
}

async login(email: string, password: string) {
await this.emailInput.fill(email);
await this.passwordInput.fill(password);
await this.loginBtn.click();
}
}
