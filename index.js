//"use strict";
let button = document.getElementById("submitButton");
button.addEventListener("click", () => {
  const table = document.getElementById("table").value;
  const tableLength = document.getElementById("tableLength").value;
  alert(`table ${table} & tableLength ${tableLength}`);
  Print(table, tableLength);
});

function Print(table, tableLength) {
  for (let index = 1; index <= tableLength; index++) {
    console.log(`${table} * ${index} = ${table * index}`);
  }
}

// let table = document.getElementById("table").value;
// // table = Number(table);
// // console.log(table);
// let tableLength = document.getElementById("tableLength").value;
// // tableLength = Number(tableLength);
// // console.log(tableLength);

// let button = document.getElementById("submitButton");
// button.addEventListener("click", () => {
//   alert(`table ${table} & tableLength ${tableLength}`);
//   Print(table, tableLength);
// });
