const container = document.querySelector('#container');
const slider = document.querySelector('#grid-size');
const showValue = document.querySelector('#slider p');

let mousePressed = false;
document.body.onmousedown = () => (mousePressed = true);
document.body.onmouseup = () => (mousePressed = false);

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

function sliderChangeGrid(){
    createDivs(slider.value);
    showValue.textContent = slider.value;
}

slider.addEventListener('input', sliderChangeGrid);






