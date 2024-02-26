// Create a webpage with 16x16 square divs

// Create a container div
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);
// create a loop to create 16*16 divs inside container
// add all this to html page
// use css flexbox to arrange the divs in 16 x 16 grid

// setup hover effect when mouse and change color of a div

// register event listener on each item for mouse enter

const gridItemList = [];
for (let i = 0; i < 256; i++) {
  gridItemList[i] = document.createElement("div");
  gridItemList[i].classList.add(`item`);
  container.appendChild(gridItemList[i]);
  gridItemList[i].addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "red";
  });
}
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

function generateGrid(gridSizeWidth, gridSizeHeight) {
  // remove existing grid
  // create new grid in the same size of the container
}
