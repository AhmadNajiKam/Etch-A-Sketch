const container = document.querySelector(".container");
let color = "blue";

const displayGrid = (count = 16) => {
  for (let i = 1; i <= count; i++) {
    const row = document.createElement("div");
    row.classList.add("row", "cell");
    for (let j = 1; j <= count; j++) {
      const col = document.createElement("div");
      col.classList.add("column", "cell");
      row.appendChild(col);
    }
    container.appendChild(row);
  }
  container.classList.add("container");
  const cols = document.querySelectorAll(".column");
  cols.forEach((x) => {
    x.addEventListener("mouseenter", () => {
      x.style.backgroundColor = color;

    });
  });
};
const clearGrid = () => {
  const clear = document.querySelectorAll(".cell");
  clear.forEach(x => x.remove());
};
const btn = document.createElement("button");
btn.textContent = "Change grid size";
const body = document.querySelector("body");
body.insertBefore(btn, container);
btn.addEventListener("click", () => {
  const gridNumber = Number(prompt("Enter the number of rows/columns you want : "));
  clearGrid();
  displayGrid(gridNumber);
});
displayGrid();
