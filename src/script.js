//create grid with nested for loops
let size = 16;
let rowList = [];


let ruleNumber = 4;

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


  }

createGrid(16);
initialize();

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
  } else if (counter = i) {
    rule.push(1);
    counter = counter - i;
  }
}
applyRules(rule);
console.log(rule);
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
    //starting at 2nd row
    //loop thru rows
    for (let i = 1; i < rows.length; i++) {
      const currentRowCells = rows[i].childNodes;
      const previousRowCells = rows[i-1].childNodes;
      let i = j;
      //loop thru previous row 
      for (let j = 0; j < previousRowCells.length; j++) {
       const centerCell = previousRowCells[j];
       const rightCell = previousRowCells[j+1];
       const leftCell = previousRowCells[j-1];
       
       let ruleset = 
       (leftCell.style.backgroundColor === "black" ? 1 : 0) +
       (centerCell.style.backgroundColor === "black" ? 1 : 0) +
       (rightCell.style.backgroundColor === "black" ? 1 : 0);
    
       if (ruleset === "111") {
          currentRowCells[j].style.backgroundCo
       } else if (ruleset === "110") {
    
       } else if (ruleset === "101") {
    
       } else if (ruleset === "100") {
    
       } else if (ruleset === "011") {
       
       } else if (ruleset === "010") {
    
       } else if (ruleset === "001") {
    
       } else if (ruleset === "000") {
    
       }

      }
    }
  }
//how to access first row??? second row?? etc
  //put all sibilings in container div into an array. 



//define basic ruleset 
 
//create rule # with basic ruleset and populate html div grid
//loop through rowList and apply rule to every cell in each row

