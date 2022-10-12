let columns = 16;
let gridItems = 16;

const resetButton = document.createElement('button')
resetButton.setAttribute('id', 'resetButton')




let grid = document.createElement("div");
grid.setAttribute("id", "grid");

for (let i = 0; i < columns; ++i) {
  let column = document.createElement("div");
  column.className = "column";
  for (let j = 0; j < gridItems; ++j) {
    let gridItem = document.createElement("div");
    gridItem.className = "gridItem";
    gridItem.addEventListener("mouseover", mouseOver);
    function mouseOver() {
      gridItem.style.backgroundColor = "red";
    }

    column.appendChild(gridItem);
  }

  grid.appendChild(column);
}

document.querySelector(".etchContainer").appendChild(grid);
