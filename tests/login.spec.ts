import { test, expect } from "../fixtures/pom.fixture";

test.describe("Авторизация", () => {
  test("Авторизация по валидным логину и паролю", async ({ pm, validUser }) => {
    await pm.loginPage.openLoginPage(); // используем свойства расширенного объекта test
    await pm.loginPage.userLogin(validUser.username, validUser.password);
    await pm.securePage.assertLoginSuccess();
  });

  test("Авторизация по НЕвалидным логину и паролю", async ({pm}) => {
    await pm.loginPage.openLoginPage();
    await pm.loginPage.userLogin("invalidlogin", "invalidpass");
    await pm.loginPage.assertLoginFiled();

    await expect(pm.loginPage.locator('#flash')).toBeVisible()
  });
});
