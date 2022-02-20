const defaultSize = 16;

let grid = document.querySelector('.grid');

/*Creates a grid */
function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add("col")
      grid.appendChild(gridElement)
    }
}

window.onload = () => {
    makeGrid(defaultSize);
  }
