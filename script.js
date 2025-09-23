let valor = 0;
const randomRGB = () => {
  const random = Math.round(Math.random() * 100 * (64 / 25));
  return random;
};
const adjustSize = (i) => {
  const size = 500 / i;
  return size;
};
const addGrid = (index = 16) => {
  index = prompt("Grid size? \n Default: 16");
  rowColumn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
  if (index > 100) {
    index = 100;
  } else if (index <= 0) {
    index = 16;
  }
  for (let i = 0; i < index; i++) {
    boxClass.style.cssText = "flex-direction: row";
    const rowDiv = document.createElement("div");
    rowDiv.style.cssText =
      "display: flex; justify-content: center; align-items: center; flex-direction: row; overflow: hidden;";
    boxClass.appendChild(rowDiv);
    for (let j = 0; j < index; j++) {
      const columnDiv = document.createElement("div");
      boxClass.style.cssText = "flex-direction: column";
      columnDiv.style.cssText = `display: flex; width: ${adjustSize(
        index
      )}px; height: ${adjustSize(
        index
      )}px; border: .1px solid rgba(243, 11, 11, 0.1); flex-grow: 1`;

      columnDiv.style.background = "white";

      rowDiv.appendChild(columnDiv);
      buttonRgb.addEventListener("click", () => {
        columnDiv.addEventListener("mouseover", () => {
          columnDiv.style.background = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
        });
      });
      buttonDarkening.addEventListener("click", () => {
        columnDiv.addEventListener("mouseover", () => {
          valor = valor + 0.1;
          columnDiv.style.opacity = `${valor}`;
        });
      });
      columnDiv.addEventListener("mouseover", () => {
        columnDiv.style.background = "black";
      });
    }
  }
};
const boxClass = document.getElementById("box");
const tux = document.getElementById("tux");
const rowColumn = document.getElementById("row__column");
const buttonRgb = document.getElementById("rgb__button");
const buttonDarkening = document.getElementById("darkening__button");
addGrid();
