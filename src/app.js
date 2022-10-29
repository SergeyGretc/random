import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { RandomFigure } from "./modules/randomfigure.js";

const contextMenu = new ContextMenu();
const background = new BackgroundModule();
const paintFigure = new RandomFigure();
contextMenu.add(background);
contextMenu.add(paintFigure);
