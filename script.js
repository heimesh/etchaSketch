let grid= document.querySelector('.grid');


function createDiv(){
    let gridBox = document.createElement('div');
    gridBox.classList.add('col');
    gridBox.style.width = "50px";
    gridBox.style.height = "50px";
};

function createGrid(){
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            grid.appendChild(createDiv());
        };
    };
};

createGrid();
