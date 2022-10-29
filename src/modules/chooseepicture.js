import { Module } from "../core/module";
import { createModal } from "@/utils";
import JS_IMG from "../../assets/picture.jpg";
import JS_IMG2 from "../../assets/prisrak.jpg";
import JS_IMG3 from "../../assets/vedma.jpg";

export class ChooseFigure extends Module {
  constructor() {
    super("ChooseFigure", "Нарисовать  фигуру");
  }

  trigger() {
    document.body.append(createModal());
  }
}
