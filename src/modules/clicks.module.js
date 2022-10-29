import { Module } from "../core/module";

export class ClicksModule extends Module {
  constructor() {
    super("clicks", "количество кликов");
    this.clicks = 0;
    this.title = document.createElement("div");
  }

  clickHandler = (e) => {
    this.clicks++;
  };

  removeListener = () => {
    this.title.textContent = `Ты кликнул мышкой ${this.clicks} раз(а)!`;
    this.clicks = 0;
    document.body.removeEventListener("click", this.clickHandler);
  };

  trigger = () => {
    document.body.innerHTML = "";
    this.title.textContent = "Отсчет начался";
    document.body.append(this.title);
    document.body.addEventListener("click", this.clickHandler);
    setTimeout(this.removeListener, 5000);
  };
}
