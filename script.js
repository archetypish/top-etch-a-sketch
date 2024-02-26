// Create a webpage with 16x16 square divs

// Create a container div
const container = document.createElement("div");
container.classList.add("container");

// create a loop to create 16*16 divs inside container
// add all this to html page
const gridItemList = [];
for (let i = 0; i < 256; i++) {
  gridItemList[i] = document.createElement("div");
  gridItemList[i].classList.add("item");
  container.appendChild(gridItemList[i]);
}

document.body.appendChild(container);

// use css flexbox to arrange the divs in 16 x 16 grid
