import { test, expect } from "@playwright/test";
import ManagePage from "./../pages/ManagePage";

test.describe("Проверка страницы с чекбоксами", () => {
  let mp: ManagePage;

  test.beforeEach(({ page }) => {
    mp = new ManagePage(page);
  });

  test("Отметить первый чекбокс и убрать отметку со второго", async () => {
    await mp.checkboxesPage.openCheckboxesPage();
    await mp.checkboxesPage.checkFirstCheckbox();
    await mp.checkboxesPage.uncheckSecondCheckbox();
    await mp.checkboxesPage.assertCheckboxesState(true, false);
  });

    test("Убрать отметку с обоих чекбоксов", async () => {
      await mp.checkboxesPage.openCheckboxesPage();
      await mp.checkboxesPage.uncheckFirstCheckbox();
      await mp.checkboxesPage.uncheckSecondCheckbox();
      await mp.checkboxesPage.assertCheckboxesState(false, false);
    });
});
