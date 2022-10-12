let columns = 16;
let rows = 16;

let grid = document.createElement("div");
grid.setAttribute("id", "grid");

for (let i = 0; i < columns; ++i) {
  let column = document.createElement("div");
  column.className = "column";
  for (let j = 0; j < rows; ++j) {
    let row = document.createElement("div");
    row.className = "row";
    column.appendChild(row);
  }
  grid.appendChild(column);
}

document.querySelector(".etchContainer").appendChild(grid);
