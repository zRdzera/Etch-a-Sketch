const container = document.querySelector('#container');
const slider = document.querySelector('#grid-size');
const showValue = document.querySelector('#slider p');
const colorPenPicker = document.querySelector('#color-picker');
const clearButton = document.querySelector('#clear-button button');
const confirmButton = document.querySelector('#confirm-button');

let mousePressed = false;
document.body.onmousedown = () => (mousePressed = true);
document.body.onmouseup = () => (mousePressed = false);

function removeDivs(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    createDivs(slider.value);
}

function createDivs(size = 16){
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
    let colorValue = colorPenPicker.value;

    e.target.style.backgroundColor = `${colorValue}`;
    e.target.style.border = "none";     
}

slider.addEventListener('input', () => showValue.textContent = `Grid-size: ${slider.value} x ${slider.value}`);
clearButton.addEventListener('click', () => createDivs(slider.value));
confirmButton.addEventListener('click', removeDivs);
