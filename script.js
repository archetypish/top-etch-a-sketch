// Create a webpage with 16x16 square divs

// Create a container div
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// Generate a grid of 16x16 size
generateGrid(16, 16);

// Add a button to the top of the screen that will send the user
// a popup asking for the number of squares per side for the new grid.

const btnForUserInput = document.createElement("button");
btnForUserInput.textContent = "Change Grid Size";
document.body.insertBefore(btnForUserInput, container);

btnForUserInput.addEventListener("click", (event) => {
  let gridSizeWidth = parseInt(prompt("Enter Grid Width", ""));
  let gridSizeHeight = parseInt(prompt("Enter Grid Height", ""));
  generateGrid(gridSizeWidth, gridSizeHeight);
});

// Event Handler to change the background color to red

function changeBackgroundColor(e) {
  e.target.style.backgroundColor = "red";
}

// Grid Generator with custom values
// that support auto grid cell sizing with flex grow

function generateGrid(gridWidth, gridHeight) {
  // remove existing grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // create new grid in the same size of the container
  const row = [];
  const col = [];
  for (let rowIndex = 0; rowIndex < gridHeight; rowIndex++) {
    // create a row div which holds individual items in column
    row[rowIndex] = document.createElement("div");
    row[rowIndex].classList.add("row");
    container.appendChild(row[rowIndex]);
    for (let colIndex = 0; colIndex < gridWidth; colIndex++) {
      col[colIndex] = document.createElement("div");
      col[colIndex].classList.add("item");

      row[rowIndex].appendChild(col[colIndex]);
      col[colIndex].addEventListener("mouseenter", changeBackgroundColor);
    }
  }
}
