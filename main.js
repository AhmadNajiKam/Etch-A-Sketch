const container = document.querySelector(".container");
for (let i = 1; i <= 16; i++) {
  const row = document.createElement("div");
  row.setAttribute("style", "border:solid red 1px;min-height:100px;display:flex;justify-content:space-between;");
  for (let j = 1; j <= 16; j++) {
    const col = document.createElement("div");
    col.setAttribute("style", "border:solid red 1px;");
    row.appendChild(col);
  }
  container.appendChild(row);
}
container.setAttribute("style", "border:solid red 1px;min-height:1600px;display:flex;gap:5;flex-direction:column;");

