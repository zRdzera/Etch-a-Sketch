const container = document.querySelector('#container');
const button = document.querySelector('button');

button.addEventListener('click', () => createDivs(prompt("Type the number of squares you want per line: ", 16)));

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
            container.appendChild(squares);
        }
    }
}

createDivs();

function executeHover(){
    const divs = document.querySelectorAll('.square');
    divs.forEach(element => {
        element.addEventListener('mouseover', () => 
        {
            element.style.backgroundColor = "gray";
            element.style.border = "none";
        });
    });
}

executeHover();


