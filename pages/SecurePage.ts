import { BasePage } from "./BasePage";
import { expect } from "@playwright/test";

export class SecurePage extends BasePage {
  async assertLoginSuccess() {
    const successoginText = this.page.locator("#flash");

    await this.basePageCheckVisible(successoginText);
    expect(successoginText).toContainText("You logged into a secure area!");
  }

  async logout() {
    await this.page.getByRole("link", { name: "Logout" }).click();
    await this.page.waitForURL("/login");
  }
}
