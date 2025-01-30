const container = document.querySelector(".container");

const color = 256;
const displayGrid = (count = 16) => {
  if (count > 100) count = 100; // to limit the grid count to 100x100
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
      x.style.backgroundColor = `rgb(${Math.round(color * Math.random())},${Math.round(color * Math.random())},${Math.round(color * Math.random())})`;

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
  let gridNumber = Number(prompt("Enter the number of rows/columns you want (max is 100) : "));

  clearGrid();
  displayGrid(gridNumber);
});
displayGrid();
