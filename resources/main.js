function genGrid(size) {
    const container = document.querySelector(".container"); 
    const pixelSize = Math.floor(608/size);

    while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

    for (let i=0; i<size; i++) {
        let row = document.createElement("div"); 
        row.style.height = `${pixelSize}px`; 

        for (let j=0; j<size; j++) {
            let cell = document.createElement("div"); 
            cell.className = "cell"; 
            cell.style.height = `${pixelSize}px`; 
            cell.style.width = `${pixelSize}px`; 
            cell.style.backgroundColor = "green"; 
            cell.style.padding = "0"; 
            cell.style.margin = "0"; 
            cell.style.display = "inline-block";
            row.appendChild(cell);
        }
        container.appendChild(row);
    }

    const divs = document.querySelectorAll(".cell"); 

    divs.forEach(div => 
        div.addEventListener("mouseenter", event => {
            event.target.style.backgroundColor = "black"; 
        })
    );    
}

function reset() {
    genGrid(16); 
}

genGrid(16);








//https://codereview.stackexchange.com/questions/157895/create-multiple-divs-inside-a-containing-div