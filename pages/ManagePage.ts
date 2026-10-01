import { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";
import { CheckboxesPage } from "./CheckboxesPage";
import { SecurePage } from "./SecurePage";

export default class ManagePage {

constructor(private readonly page: Page) {}

  // кэш, изначально undefinded

  private _login?: LoginPage;
  private _checkboxes?: CheckboxesPage;
  private _secure?: SecurePage;

  // геттер для создания авторизованиого юзера и переиспользования его

  get loginPage(): LoginPage {
    return (this._login ??= new LoginPage(this.page));
  }

  get securePage(): SecurePage {
    return (this._secure ??= new SecurePage(this.page));
  }

  get checkboxesPage(): CheckboxesPage {
    return (this._checkboxes ??= new CheckboxesPage(this.page));
  }
}
