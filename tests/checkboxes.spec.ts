import { test, expect } from "../fixtures/pom.fixture";

test.describe("Проверка страницы с чекбоксами", () => {
  test("Отметить первый чекбокс и убрать отметку со второго", async ({
    pm,
    page,
  }) => {
    await pm.checkboxesPage.openCheckboxesPage();
    await pm.checkboxesPage.checkFirstCheckbox();

    await expect(page).toHaveScreenshot();
    await expect(pm.checkboxesPage.locator("form#checkboxes")).toBeVisible();

    await pm.checkboxesPage.uncheckSecondCheckbox();
   await pm.checkboxesPage.assertCheckboxesState(true, false);
  });

  test("Убрать отметку с обоих чекбоксов", async ({pm}) => {
    await pm.checkboxesPage.openCheckboxesPage();
    await pm.checkboxesPage.uncheckFirstCheckbox();
    await pm.checkboxesPage.uncheckSecondCheckbox();
    await pm.checkboxesPage.assertCheckboxesState(false, false);
  });
});
