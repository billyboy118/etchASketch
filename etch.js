let gridVar;
if (gridVar === undefined)gridVar = 16;
let colourState;

const container = document.querySelector('#container');
const resetButton = document.querySelector("#reset");
const resizeButton = document.querySelector("#resize");
const randomButton = document.querySelector("#random");
const shadingButton = document.querySelector("#Shading");


function gridCreate (gridVar,colourState) {
    
    var toAdd = document.createDocumentFragment();
    

    container.style.setProperty("--rowNum", gridVar);
    container.style.setProperty("--colNum", gridVar);

    for (let i = 0 ; i < gridVar * gridVar; i++) {
        var newDiv = document.createElement("div");

        newDiv.id = "b" + i;
        newDiv.className = "gridSquares";
        toAdd.appendChild(newDiv);
        newDiv.addEventListener("mouseenter", function (v) {
        

            if (colourState == "random"){
                v.target.style.background = "#"+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);       
            }else if (colourState == "shading") {
                v.target.style.background = "black";
            } else {
                v.target.style.background = "black";
            } 
       }); 
}





container.appendChild(toAdd);
}

gridCreate(gridVar);

resetButton.addEventListener("click", function (v) {
    location.reload();
});

resizeButton.addEventListener("click", function (v) { 
    gridVar = parseInt(prompt("How many grids would you like? Nothing larger than 150"))
    if ( gridVar > 150){
        alert("I said nothing lareger than 150");
        gridVar = 16;
    }else{
    removeAllChildNodes (container);
    return gridCreate(gridVar);
    }
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
randomButton.addEventListener("click",function(){
    removeAllChildNodes (container);
    let colour = "random"
    return gridCreate(gridVar, colour);
});

shadingButton.addEventListener("click",function(){
    removeAllChildNodes (container);
    let colour = "shading"
    return gridCreate(gridVar, colour);
});