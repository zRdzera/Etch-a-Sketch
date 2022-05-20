const container = document.querySelector('#container');
const slider = document.querySelector('#grid-size');
const showValue = document.querySelector('#slider p');
const colorPenPicker = document.querySelector('#color-picker');
const clearButton = document.querySelector('#clear-button button');
const confirmButton = document.querySelector('#confirm-button');
const rgbButton = document.getElementById('rgb-button');
const colorButton = document.getElementById('color-button');

colorButton.style.transform = 'translateY(5px)';
colorButton.style.boxShadow = '1px 3px 5px rgb(11, 13, 20)';

let rgbPressed = false;
let colorPressed = true;
let mousePressed = false;

document.body.onmousedown = () => (mousePressed = true);
document.body.onmouseup = () => (mousePressed = false);

slider.addEventListener('input', () => showValue.textContent = `Grid-size: ${slider.value} x ${slider.value}`);
clearButton.addEventListener('click', removeDivs);
confirmButton.addEventListener('click', removeDivs);
rgbButton.addEventListener('mousedown', () => {
    rgbPressed = true;
    rgbButton.style.transform = 'translateY(5px)';
    rgbButton.style.boxShadow = '1px 3px 5px rgb(11, 13, 20)';

    colorPressed = false;
    colorButton.style.removeProperty('transform');
    colorButton.style.removeProperty('box-shadow');
});

colorButton.addEventListener('mousedown', () => {
    colorPressed = true;
    colorButton.style.transform = 'translateY(5px)';
    colorButton.style.boxShadow = '1px 3px 5px rgb(11, 13, 20)';

    rgbPressed = false;
    rgbButton.style.removeProperty('transform');
    rgbButton.style.removeProperty('box-shadow');
}); 

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

function rgbColor(e){
    let red = Math.floor(Math.random() * 258);
    let green = Math.floor(Math.random() * 258);
    let blue = Math.floor(Math.random() * 258);
    return `rgb(${red}, ${green}, ${blue})`;
}

function changeSquareColor(e){
    if(e.type === 'mouseover' && mousePressed === false) return;
        
    if(rgbPressed == true){
        let rgb = rgbColor();
        e.target.style.backgroundColor = `${rgb}`;
    }
    else {
        let colorValue = colorPenPicker.value;
        e.target.style.backgroundColor = `${colorValue}`;
    }

    e.target.style.border = "none";     
}


