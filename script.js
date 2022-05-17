const container = document.querySelector('#container');
// const button = document.querySelector('button');
const range = document.querySelector('#grid-size');

let mousePressed = false;
document.body.onmousedown = () => (mousePressed = true);
document.body.onmouseup = () => (mousePressed = false);

// button.addEventListener('click', () => createDivs(prompt("Type the number of squares you want per line: ", 16)));

function removeDivs(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function createDivs(size = 16){
    removeDivs();

    let cellWidth = 600/size + "px";
    let cellHeight = 600/size + "px";

    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            let squares = document.createElement('div');
            squares.setAttribute('class', 'square');
            squares.style.cssText = `width: ${cellWidth}; height: ${cellHeight}`;
            squares.addEventListener('mousedown', changeSquareColor);
            squares.addEventListener('mouseover', changeSquareColor);
            container.appendChild(squares);
        }
    }
}

createDivs();

function changeSquareColor(e){
    if(e.type === 'mouseover' && mousePressed === false) return;
    
    e.target.style.backgroundColor = "gray";
    e.target.style.border = "none";     
}





