import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

export class LoginPage extends BasePage {
  async openLoginPage() {
    await this.goToURL("/login"); // baseUrl задан в playwright.config.ts
  }

  async userLogin(username: string, password: string) {
    await this.basePageFill("#username", username); // передаем string
    await this.basePageFill("#password", password);
    await this.basePageClick(this.page.getByRole("button", { name: "Login" }));
  }

  async assertLoginFiled() {
    const invalidLoginText = this.page.locator("#flash");

    await this.basePageCheckVisible(invalidLoginText); // передаем Locator
    expect(invalidLoginText).toContainText("Your username is invalid!");
  }
}
