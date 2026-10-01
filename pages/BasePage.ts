import { Locator, Page, expect } from "@playwright/test";

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  // ---Навигация---
  async goToURL(path: string) {
    await this.page.goto(path);
  }


// Вспомогательные функции для наследуемых классов: клик, заполнение, проверка видимости

  protected async basePageClick(selector: string | Locator) {
    await this.toLocator(selector).click();
  }

  protected async basePageFill(selector: string | Locator, value: string) {
    await this.toLocator(selector).fill(value);
  }

  protected async basePageCheckVisible(
    selector: string | Locator
  ) {
    await expect(this.toLocator(selector)).toBeVisible();
  }

  // Преобразование строки в локатор

  protected toLocator(selcector: string | Locator): Locator {
    return typeof selcector === "string"
      ? this.page.locator(selcector) // если строка, то ищем по ней локатор
      : selcector; // если уже является Locator, то преобразование не требуется
  }
}
