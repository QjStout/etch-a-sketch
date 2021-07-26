const gridHeight = 16;
const gridWidth = 16;

const gridContainer = document.getElementById('grid');
getNewGrid(gridWidth, gridHeight).forEach(row => {
    gridContainer.appendChild(row);
});

function getNewPixel() {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    return pixel;
}

function getNewRow(rowLength) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let i = 0; i < rowLength; i++) {
        row.appendChild(getNewPixel());
    }
    
    return row;
}

function getNewGrid(width, height) {
    const grid = [];

    for (let i = 0; i < height; i++) {
        grid.push(getNewRow(width));
    }

    return grid;
}