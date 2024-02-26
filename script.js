// Create a webpage with 16x16 square divs

// Create a container div
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// create a loop to create 16 divs inside container
const gridItemList = [];
for (let i = 0; i < 16; i++) {
  gridItemList[i] = document.createElement("div");
  gridItemList[i].classList.add("item");
  container.appendChild(gridItemList[i]);
}

// add all this to html page

// use css flexbox to arrange the divs in 16 x 16 grid
