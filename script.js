const container = document.querySelector('.container');
const blocks = document.querySelector('div');
const resetButton = document.querySelector('.reset');
const customButton = document.querySelector('.create');
const allBlocks = container.childNodes;

function createGrid(amount){
    // Init-ing container's columns and rows
    container.style.setProperty('grid-template-columns', `repeat(${amount}, 2fr)`);
    container.style.setProperty('grid-template-rows', `repeat(${amount}, 2fr)`);

    // Creating the blocks
    const size = amount * amount;
    for (let i = 0; i < size; i++){
        const div = document.createElement('div');
        div.classList.add('uncolored');
        container.append(div);
    };
};

blocks.addEventListener("mouseover", function(event) {
    event.target.classList.replace('uncolored', 'colored');
});

resetButton.addEventListener('click', () => {
    for (let blocks of allBlocks){
        blocks.classList.replace('colored', 'uncolored');
    };
}
);

customButton.addEventListener('click', () => {
    let customGrid = prompt("Enter grid size", "16");
    if (isNaN(customGrid)){
        alert("Numbers only!");
    } else {
        container.innerHTML = "";
        createGrid(customGrid);
    }
})

createGrid(16);