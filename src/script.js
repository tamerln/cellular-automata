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

createGrid(4);

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
console.log(rule);
}


//how to access first row??? second row?? etc
  //put all sibilings in container div into an array. 
let rows = document.querySelectorAll(".row");
  for (let t = 0; t < rows.length; t++) {
    rowList.push(rows[t])
  console.log(rowList);
  }


//define basic ruleset 
 
//create rule # with basic ruleset and populate html div grid
//loop through rowList and apply rule to every cell in each row

