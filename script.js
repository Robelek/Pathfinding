let gridContainer = document.querySelector(".grid-container");
let tileTemplate = document.querySelector(".tile");

let xSizeInput = document.getElementsByName("xSize")[0];
let ySizeInput = document.getElementsByName("ySize")[0];

for(let i=0;i<tileTemplate.children.length;i++)
{
    tileTemplate.children[i].textContent = "0";
}
gridContainer.removeChild(tileTemplate);

function createGrid()
{
    for(let i=0;i<gridContainer.children.length;i++)
    {
        gridContainer.removeChild(gridContainer.children[i]);
    }

    let xSize = xSizeInput.value;
    let ySize = ySizeInput.value;
    console.log("New grid: ", xSize, " ", ySize);
    gridContainer.style.setProperty("grid-template-columns", "repeat("xSize, 1fr)");

    let tileNumber = parseInt(xSize)*parseInt(ySize);
    for(let i=0;i<tileNumber;i++)
    {
        let newNode = tileTemplate.cloneNode(true);
        gridContainer.appendChild(newNode);
    }
}