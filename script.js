const addGrid = (index = 16) => {
  for (let i = 0; i < index; i++) {
    boxClass.style.cssText = "flex-direction: row";
    const rowDiv = document.createElement("div");
    rowDiv.style.cssText =
      "display: flex; justify-content: center; align-items: center; flex-direction: row;";
    boxClass.appendChild(rowDiv);
    for (let j = 0; j < index; j++) {
      const columnDiv = document.createElement("div");
      boxClass.style.cssText = "flex-direction: column";
      columnDiv.style.cssText =
        "flex-direction: row; padding: 10px 10px; border: .1px solid black";
      columnDiv.style.background = "white";
      rowDiv.appendChild(columnDiv);
      columnDiv.addEventListener("mouseover", () => {
        columnDiv.style.background = "black";
      });
    }
  }
};
const boxClass = document.getElementById("box");
const tux = document.getElementById("tux");
const rowColumn = document.getElementById("row__column");
let grid = addGrid();

rowColumn.addEventListener("click", () => {
  const rc = prompt("???");
  grid = addGrid(rc);
});
