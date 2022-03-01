let colorPicked = "#393939";
let sliderVal = 16;
let gridBox;

let grid = document.querySelector('.grid');
let color = document.querySelector('#color');
let colorBtn = document.querySelector('.colorBtn');
let rainbow = document.querySelector('.rainbow');
let erase = document.querySelector('.erase');
let clear = document.querySelector('.clear');
let slider = document.querySelector('.slider');


/*Creates a grid */
function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add("col");
      grid.appendChild(gridElement);
      gridBox = document.querySelectorAll('.col');
    }
}

makeGrid(sliderVal);

slider.addEventListener('input', () => {
  sliderVal = slider.value;
  makeGrid(sliderVal);
  gridBox.forEach(gridBox => {
    gridBox.style.backgroundColor = "#FFFFFF";
  })
});


color.addEventListener('input', () => {
  colorPicked = color.value;
});


colorBtn.addEventListener('click', function(){
  gridBox.forEach( gridBox => {
    gridBox.addEventListener("mouseover", e =>{
      e.target.style.backgroundColor = colorPicked;
    });
  });
});

rainbow.addEventListener('click', function(){
  gridBox.forEach( gridBox => {
    gridBox.addEventListener("mouseover", e =>{
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    });
  });
});

erase.addEventListener("click", function(){
  gridBox.forEach( gridBox => {
    gridBox.addEventListener("mouseover", e =>{
      e.target.style.backgroundColor = "white";
    });
  });
});

clear.addEventListener("click", function(){
  gridBox.forEach( gridBox => {
    gridBox.style.backgroundColor = "white";
  });
});



