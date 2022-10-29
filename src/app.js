import "./styles.css";
import { ContextMenu } from "./menu";
import { BackgroundModule } from "./modules/background.module";
import { RandomFigure } from "./modules/randomfigure.js";
import { ChooseFigure } from "./modules/chooseepicture";
import { DeleteRandomFigure } from "./modules/deleterandomfigure.js";

const contextMenu = new ContextMenu();
const background = new BackgroundModule();
const paintFigure = new RandomFigure();
const choosenPicture = new ChooseFigure();
const DeleteRandomFigureButton = new DeleteRandomFigure();
contextMenu.add(background);
contextMenu.add(paintFigure);
contextMenu.add(choosenPicture);
contextMenu.add(DeleteRandomFigureButton);
