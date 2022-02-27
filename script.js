const defaultSize = 16;
let colorPicked

let grid = document.querySelector('.grid');
let erase = document.querySelector('.erase');
let colorBtn = document.querySelector('.colorBtn');
let clear = document.querySelector('.clear');
let color = document.querySelector('#color');


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
    gridBox.addEventListener("mousedown", e =>{
      e.target.style.backgroundColor = "colorPicked";
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



