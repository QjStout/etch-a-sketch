const GRID_HEIGHT = 16;
const GRID_WIDTH = 16;

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

    for (let i = 0; i < rowLength; i++) {
        row.appendChild(getNewPixel());
    }
    
    return row;
}

function getNewPixel() {
    const pixel = document.createElement('div');
    pixel.classList.add(PIXEL_CLASS);
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
    const input = prompt("Enter Numer 1-100");
    console.log(input);
}