import { BasePage } from "./BasePage";
import { expect, Locator, Page } from "@playwright/test";

export class CheckboxesPage extends BasePage {
  protected readonly firstBox: Locator;
  protected readonly secondBox: Locator;
  protected readonly checkboxForm: Locator;

  constructor(page: Page) {
    super(page);

    this.firstBox = this.page.locator('form#checkboxes input').nth(0);
    this.secondBox = this.page.locator("form#checkboxes input").nth(1);
    this.checkboxForm = this.page.locator("#checkboxes");
  }

  // ---переход на страницу и провекра видимости---

  async openCheckboxesPage() {
    await this.goToURL("/checkboxes");
    await this.basePageCheckVisible(this.checkboxForm);
  }

  // ---проверка чекбоксов---

  async checkFirstCheckbox() {
    // первый чекбокс
    await this.firstBox.check();
  }

  async uncheckFirstCheckbox() {
    await this.firstBox.uncheck();
  }

  async checkSecondCheckbox() {
    // второй чекбокс
    await this.secondBox.check();
  }

  async uncheckSecondCheckbox() {
    await this.secondBox.uncheck();
  }

  // --- валидация вкл/выкл чекбоксов ---

  async assertCheckboxesState(
    isFirstChecked: boolean,
    isSecondChecked: boolean,
  ) {
    await expect(this.firstBox).toBeChecked({ checked: isFirstChecked });
    await expect(this.secondBox).toBeChecked({ checked: isSecondChecked });
  }
}
