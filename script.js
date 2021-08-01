const GRID_HEIGHT = 16;
const GRID_WIDTH = 16;

const GRID_SIZE = 500;

const PIXEL_CLASS = "pixel";
const PIXEL_DRAWN_CLASS = "drawn";
const ROW_CLASS = "row";
const GRID_CLASS = "grid";

const gridContainer = getGrid();
createNewGrid(GRID_WIDTH, GRID_HEIGHT).forEach(appendRowToGrid, gridContainer);
addMouseOverToPixels();

function createNewGrid(width, height) {
    const grid = [];

    for (let i = 0; i < height; i++) {
        grid.push(getNewRow(width));
    }

    return grid;
}

function getNewRow(rowLength) {
    const row = document.createElement('div');
    row.classList.add(ROW_CLASS);

    const pixelSize = GRID_SIZE/rowLength-2;

    for (let i = 0; i < rowLength; i++) {
        row.appendChild(getNewPixel(pixelSize));
    }
    
    return row;
}

function getNewPixel(size) {
    const pixel = document.createElement('div');
    pixel.classList.add(PIXEL_CLASS);
    pixel.style.height = `${size}px`;
    pixel.style.width = `${size}px`;

    return pixel;
}

function appendRowToGrid(row) {
    this.appendChild(row);
}

function clearGrid() {
    const drawnPixel = getGrid().querySelectorAll(`.${PIXEL_DRAWN_CLASS}`);
    drawnPixel.forEach(pixel => {
        pixel.classList.remove('drawn');
        pixel.addEventListener('mouseenter', mouseOverEvent);
    });
}

function getGrid() {
    return document.getElementById(GRID_CLASS);
}

function addMouseOverToPixels() {
    const pixels = document.querySelectorAll(`.${PIXEL_CLASS}`);

    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', mouseOverEvent);
    });
}

function mouseOverEvent() {
    this.removeEventListener('mouseenter', mouseOverEvent);
    this.classList.add(PIXEL_DRAWN_CLASS);
}

function sizeBtnClicked() {
    let input = prompt("Enter Number", "30");
    if(input === null) { return; };
    if(isNaN(input)) { return alert(`'${input}' is not a number between 1-100`); };

    getGrid().innerText = '';
    input = parseInt(input);

    createNewGrid(input, input).forEach(appendRowToGrid, getGrid());
    addMouseOverToPixels();
}
