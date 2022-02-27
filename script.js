const defaultSize = 16;
let colorPicked = "#000000";

let grid = document.querySelector('.grid');
let color = document.querySelector('#color');
let colorBtn = document.querySelector('.colorBtn');
let rainbow = document.querySelector('.rainbow');
let erase = document.querySelector('.erase');
let shading = document.querySelector('.shading');
let clear = document.querySelector('.clear');


/*Creates a grid */
function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add("col");
      grid.appendChild(gridElement);
    }
}

/*window.onload = () => {
    makeGrid(defaultSize);
}*/

makeGrid(16);

const gridBox = document.querySelectorAll('.col');

color.addEventListener('input', () => {
  colorPicked = color.value;
});



colorBtn.addEventListener('click', function(){
  gridBox.forEach( gridBox => {
    gridBox.addEventListener("click", e =>{
      e.target.style.backgroundColor = colorPicked;
    });
  });
});

rainbow.addEventListener('click', function(){
  gridBox.forEach( gridBox => {
    gridBox.addEventListener("click", e =>{
      e.target.style.backgroundColor = colorPicked;
    });
  });
});

erase.addEventListener("click", function(){
  gridBox.forEach( gridBox => {
    gridBox.addEventListener("click", e =>{
      e.target.style.backgroundColor = "white";
    });
  });
});

clear.addEventListener("click", function(){
  gridBox.forEach( gridBox => {
    gridBox.style.backgroundColor = "white";
  });
});



