// Create a webpage with 16x16 square divs

// Create a container div
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// Sketch Color
let rgbList = getRandomRGBColorList();

// Generate a grid of 16x16 size
generateGrid(16, 16);

// Add a button to the top of the screen that will send the user
// a popup asking for the number of squares per side for the new grid.

const btnForUserInput = document.createElement("button");
btnForUserInput.textContent = "Change Grid Size";
document.body.insertBefore(btnForUserInput, container);

btnForUserInput.addEventListener("click", (event) => {
  rgbList = getRandomRGBColorList();
  eventCounter = 0;
  let gridSizeWidth = 0;
  let gridSizeHeight = 0;

  gridSizeWidth = parseInt(prompt("Enter Grid Width (<=100)", ""));
  while (gridSizeWidth > 100) {
    gridSizeWidth = parseInt(prompt("Re-Enter Grid Width <=100", ""));
  }

  gridSizeHeight = parseInt(prompt("Enter Grid Height (<=100)", ""));
  while (gridSizeHeight > 100) {
    gridSizeHeight = parseInt(prompt("Re-enter Grid Height <=100", ""));
  }

  generateGrid(gridSizeWidth, gridSizeHeight);
});

// Event Handler to change the background color to random color
let eventCounter = 0;
let rgbListCurrent;
function changeBackgroundColor(e) {
  //   for random color
  //   e.target.style.backgroundColor = makeColor(getRandomRGBColorList());

  // progressive update
  if (eventCounter < 10) {
    eventCounter++;
    rgbListCurrent = rgbList.map(
      (component) => (1 - eventCounter / 10) * component
    );
  } else {
    rgbListCurrent = [0, 0, 0];
  }
  e.target.style.backgroundColor = makeColor(rgbListCurrent);
}

// Random Color in every cell
function makeColor(rgbList) {
  return `rgb(${rgbList[0]},${rgbList[1]},${rgbList[2]}`;
}

function getRandomRGBColorList() {
  return [
    generateRandomNumber(256),
    generateRandomNumber(256),
    generateRandomNumber(256),
  ];
}

function generateRandomNumber(number) {
  return Math.floor(Math.random() * number);
}

// progressive darkening event

// each interaction adds 10% of black or color to the square
// after 10 interactions, the result is complete black

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
