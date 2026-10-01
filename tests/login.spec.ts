import { test, expect } from "@playwright/test";
import ManagePage from "./../pages/ManagePage";

test.describe("Авторизация", () => {
  let mp: ManagePage;

  test.beforeEach(({ page }) => {
    mp = new ManagePage(page);
  });

  test("Авторизация по валидным логину и паролю", async () => {
    await mp.loginPage.openLoginPage();
    await mp.loginPage.userLogin("tomsmith", "SuperSecretPassword!");
    await mp.securePage.assertLoginSuccess();
  });

  test("Авторизация по НЕвалидным логину и паролю", async () => {
    await mp.loginPage.openLoginPage();
    await mp.loginPage.userLogin("invalidlogin", "invalidpass");
    await mp.loginPage.assertLoginFiled();
  });
});
