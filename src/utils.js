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

export function getRandomFigure() {
  const bodySize = document.body.getBoundingClientRect();
  const sizeX = random(20, 150);
  const sizeY = random(20, 150);
  const figure = document.createElement("div");
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
  const id = random(1, 6);
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
