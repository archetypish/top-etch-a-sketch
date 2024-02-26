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
