const container = document.querySelector(".container");
let color = "blue";
for (let i = 1; i <= 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 1; j <= 16; j++) {
    const col = document.createElement("div");
    col.classList.add("column");
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
})
