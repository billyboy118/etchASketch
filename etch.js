let gridVar = 16;
const container = document.querySelector('#container');
const resetButton = document.querySelector("#reset");
const resizeButton = document.querySelector("#resize");

//container.style.setProperty("--rowNum", gridVar);
//container.style.setProperty("--colNum", gridVar);



function gridCreate (gridVar) {
    var toAdd = document.createDocumentFragment();

    container.style.setProperty("--rowNum", gridVar);
    container.style.setProperty("--colNum", gridVar);

    for (let i = 0 ; i < gridVar * gridVar; i++) {
        var newDiv = document.createElement("div");

        newDiv.id = "b" + i;
        newDiv.className = "gridSquares";
        toAdd.appendChild(newDiv);
        newDiv.addEventListener("mouseenter", function (v) {
            v.target.style.background = "black";          
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
        alert("I said nothing lareger than 150 dipshit");
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