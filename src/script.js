//create grid with nested for loops
let size = 16;


const changeSize = document.querySelector("#sizechange");
const ruleSelector = document.querySelector("#ruleselector");
const cells = document.querySelectorAll(".cells");


changeSize.addEventListener("click", function(e) {
  let value = window.prompt("please enter desired grid size", 16);
  createGrid(value);
})

ruleSelector.addEventListener("click", function(e) {
  let value = window.prompt("please enter the rule you would like to see", 30);
  toBinary(value);
})

function createGrid(size) {
const container = document.querySelector("#container");
container.innerHTML = '';
for (let i = 0; i < size; i++) {
  const row = document.createElement("div");
  container.appendChild(row);
  row.classList.add("row");
  for (let j = 0; j < size; j++) {
    const cell = document.createElement("div");
    row.appendChild(cell);
    cell.classList.add("cell");
  }
}
initialize();

  }



//convert rule # to binary
function toBinary(ruleNumber) {
let rule = [];
let counter = parseInt(ruleNumber);
for (let i = 128; i >= 1; i = i/2) {
  if (counter > i) {
    rule.push(1);
    counter = counter - i;
  } else if (counter < i) {
    rule.push(0);
  } else if (counter === i) {
    rule.push(1);
    counter = counter - i;
  }
}
console.log(rule);
applyRules(rule);

}

//!!!!!!!!!!!INITIALIZE WITH MIDDLE TOP CELL FILLED IN
function initialize() {
  let initRow = document.getElementById("container").firstChild.childNodes;
  for (let i = 0; i < initRow.length; i++) {
    if (i === Math.floor(initRow.length / 2)) {
      initRow[i].style.backgroundColor = "black";
    } else {
      initRow[i].style.backgroundColor = "";
    }
    }
  }
 
  function applyRules(rule) {
    const rows = document.querySelectorAll(".row");
  
    for (let i = 0; i < rows.length - 1; i++) {
      let currentRow = rows[i];
      let nextRow = rows[i + 1];
  
      let cellsInCurrentRow = currentRow.querySelectorAll(".cell");
  
      // Create an array to store the new colors for the next row
      let newStates = [];
  
      // Loop through every cell in row[i], account for borders of grid 
      for (let j = 0; j < cellsInCurrentRow.length; j++) {
        const currentCell = cellsInCurrentRow[j];
        const leftCell = j > 0 ? cellsInCurrentRow[j - 1] : null;
        const rightCell = j < cellsInCurrentRow.length - 1 ? cellsInCurrentRow[j + 1] : null;
  
        // Calculate ruleset for the current cell
        let ruleset =
          (leftCell ? (leftCell.style.backgroundColor === "black" ? '1' : '0') : '0') +
          (currentCell.style.backgroundColor === "black" ? '1' : '0') +
          (rightCell ? (rightCell.style.backgroundColor === "black" ? '1' : '0') : '0');
  
        // Determine the new color based on ruleset
        let newState = 'dead'; // Default to white
        if (ruleset === "111" && rule[0] === 1) {
          newState = 'alive';
        } else if (ruleset === "110" && rule[1] === 1) {
          newState = 'alive';
        } else if (ruleset === "101" && rule[2] === 1) {
          newState = 'alive';
        } else if (ruleset === "100" && rule[3] === 1) {
          newState = 'alive';
        } else if (ruleset === "011" && rule[4] === 1) {
          newState = 'alive';
        } else if (ruleset === "010" && rule[5] === 1) {
          newState = 'alive';
        } else if (ruleset === "001" && rule[6] === 1) {
          newState = 'alive';
        } else if (ruleset === "000" && rule[7] === 1) {
          newState = 'alive';
        }
  
        // Push the new color to the array for the next row
        newStates.push(newState);
      }
  
      // Apply the new colors to the cells in the next row
      let nextRowCells = nextRow.querySelectorAll(".cell");
      for (let j = 0; j < newStates.length; j++) {
        if (newStates[j] === 'alive') {
          nextRowCells[j].style.backgroundColor = 'black';
        } else {
          nextRowCells[j].style.backgroundColor = 'white';
        }
      }
    }
  }
   

  
  



  //apply rules shit that didnt work:
   //this function is called by the tobinary function, which is called when the changerule button is clicked
//     let ruleset = '';
//     //loop thru every row
//     for (let i = 0; i < rows.length; i++) {
//       //assign current row and next row variables
//       let currentRow = rows[i];
//       let prevRow = rows[i-1];
//       //loop thru all cells in row[i]
//       for (let j = 0; j < currentRow.childNodes; j++) {
//         //assign variables to current cell and the cells to the right/left of that cell
//         let leftCell = currentRow.childNodes[j-1] || currentRow.childNodes[currentRow.childNodes - 1];
//         let currentCell = currentRow.childNodes[j];
//         let rightCell = currentRow.childNodes[j+1] || currentRow.childNodes[0];

//         //define which ruleset to apply for each individual cell
//         ruleset += 
//         (leftCell.style.backgroundColor === "black" ? "1" : "0") +
//         (currentCell.style.backgroundColor === "black" ? "1" : "0") +
//         (rightCell.style.backgroundColor === "black" ? "1" : "0");
//         //set color of cells in current row depending on color of cells in previous row according to rule that was selected.

//       }
      
//     }
// console.log(ruleset);