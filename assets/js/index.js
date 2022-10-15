size = 16


let columns = size;
let gridItems = size;
let button = document.createElement("button");
button.textContent = "Grid Size";
// document.querySelector(".etchContainer").appendChild(button);
button.onclick = function () {
  size = prompt("Enter your desired grid size. \nMax size is 100.");
};

let grid = document.createElement("div");
grid.setAttribute("id", "grid");

function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}

for (let i = 0; i < columns; ++i) {
  let column = document.createElement("div");
  column.className = "column";
  for (let j = 0; j < gridItems; ++j) {
    let gridItem = document.createElement("div");
    gridItem.className = "gridItem";
    gridItem.addEventListener("mouseover", mouseOver);
    function mouseOver() {
      gridItem.style.backgroundColor = randomColor();
    }
    column.appendChild(gridItem);
  }
  grid.appendChild(column);
}

document.querySelector(".etchContainer").appendChild(grid);
