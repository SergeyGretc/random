import JS_IMG from "../assets/picture.jpg";
import JS_IMG2 from "../assets/prisrak.jpg";
import JS_IMG3 from "../assets/vedma.jpg";

export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomColor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += random(0, 15).toString(16);
  }
  return color;
}

function renderFigure(min, max) {
  const bodySize = document.body.getBoundingClientRect();
  const sizeX = random(min, max);
  const sizeY = random(min, max);
  const figure = document.createElement("div");
  figure.classList.add("geometricFigures");
  figure.style.background = getRandomColor();
  figure.style.position = "absolute";
  figure.style.top = `${random(
    Math.max(sizeX, sizeY),
    bodySize.height - Math.max(sizeX, sizeY)
  )}px`;
  figure.style.left = `${random(
    Math.max(sizeX, sizeY),
    bodySize.width - Math.max(sizeX, sizeY)
  )}px`;
  return { sizeX, sizeY, figure };
}

export function deleteRandomFigures() {
  const deleteAllFigures = document.querySelectorAll(".geometricFigures");
  deleteAllFigures.forEach((el) => {
    el.remove();
  });
}

export function getRandomFigure() {
  const { sizeX, sizeY, figure } = renderFigure(20, 150);
  const id = random(1, 5);
  if (id === 1) {
    figure.style.width = `${sizeX}px`;
    figure.style.height = `${sizeX}px`;
    figure.style.borderRadius = "50%";
  }
  if (id === 2) {
    figure.style.width = `${sizeX}px`;
    figure.style.height = `${sizeX}px`;
  }
  if (id === 3) {
    figure.style.width = `${sizeX}px`;
    figure.style.height = `${sizeY}px`;
  }
  if (id === 4) {
    figure.style.width = `${sizeX}px`;
    figure.style.height = `${sizeY}px`;
    figure.style.borderRadius = `${random(50, 100)}%`;
  }
  if (id === 5) {
    figure.style.width = `${sizeX}px`;
    figure.style.height = `${sizeY}px`;
    figure.style.borderRadius = `${random(0, 50)}%`;
  }
  return figure;
}

function initialModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // const modalImg = document.createElement("img");
  // modalImg.style.width = "500px";
  // modalImg.style.height = "500px";
  // modalImg.src = JS_IMG;

  const header = document.createElement("h1");
  header.textContent = "Выберите картинку";
  modal.append(header);

  const buttonForPumpkin = document.createElement("button");
  buttonForPumpkin.className = "button buttonToPrint";
  buttonForPumpkin.textContent = "Тыква";

  const buttonForCast = document.createElement("button");
  buttonForCast.className = "button buttonToPrint";
  buttonForCast.textContent = "Приведение";

  const buttonForWitch = document.createElement("button");
  buttonForWitch.className = "button buttonToPrint";
  buttonForWitch.textContent = "Ведьма";

  const buttonForDelete = document.createElement("button");
  buttonForDelete.className = "button buttonToPrint";
  buttonForDelete.textContent = "Удалить картинки";

  modal.append(
    buttonForPumpkin,
    buttonForCast,
    buttonForWitch,
    buttonForDelete
  );

  return {
    buttonForPumpkin,
    buttonForCast,
    buttonForWitch,
    buttonForDelete,
    modal,
  };
}

// export function modalImg() {
//   const modalImg = document.createElement("img");
//   modalImg.style.width = "500px";
//   modalImg.style.height = "500px";
//   return modalImg;
// }
export function createModal() {
  const {
    buttonForPumpkin,
    buttonForCast,
    buttonForWitch,
    buttonForDelete,
    modal,
  } = initialModal();
  buttonForPumpkin.addEventListener("click", () => {
    modal.remove();
    document.body.append(getFigure(JS_IMG));
  });
  buttonForCast.addEventListener("click", () => {
    modal.remove();
    document.body.append(getFigure(JS_IMG2));
  });
  buttonForWitch.addEventListener("click", () => {
    modal.remove();
    document.body.append(getFigure(JS_IMG3));
  });
  buttonForDelete.addEventListener("click", () => {
    modal.remove();
    const deleteAll = document.querySelectorAll(".addedElements");
    deleteAll.forEach((elem) => {
      elem.remove();
    });
  });
  return modal;
}

export function getFigure(lincToPicture) {
  const { sizeX, figure } = renderFigure(100, 150);
  figure.classList.add("addedElements");
  figure.style.borderRadius = "15px";
  figure.style.width = `${sizeX}px`;
  figure.style.height = `${sizeX}px`;

  const imgines = document.createElement("img");
  imgines.style.width = `${sizeX}px`;
  imgines.style.height = `${sizeX}px`;
  imgines.style.borderRadius = "15px";
  imgines.src = lincToPicture;
  figure.append(imgines);

  return figure;
}
