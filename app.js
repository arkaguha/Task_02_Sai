"use strict";
//const pS = require("prompt-sync");
//const prompt = pS();

let table;
let tableLength;

function Prompt() {
  table = prompt("Enter a number: ");
  tableLength = prompt("Enter the length of the table: ");
}

do {
  Prompt();
  //   console.log(typeof table);
  //   console.log(table);
  //   console.log(Number.isNaN(parseInt(table, 10)));
  if (
    table === "" ||
    tableLength === "" ||
    Number.isNaN(parseInt(table)) ||
    Number.isNaN(parseInt(tableLength))
  ) {
    alert("Enter valid number!");
  } else {
    table = Number(table);
    tableLength = Number(tableLength);
    for (let index = 1; index <= tableLength; index++) {
      console.log(`${table} * ${index} = ${table * index}`);
    }
    break;
  }
} while (
  table === "" ||
  tableLength === "" ||
  Number.isNaN(parseInt(table)) ||
  Number.isNaN(parseInt(tableLength))
);

// console.log(typeof table);
// Prompt();
// console.log(typeof table);

// if (
//   table !== null &&
//   tableLength !== null &&
//   table !== undefined &&
//   tableLength !== undefined
// ) {
//   for (let index = 1; index <= tableLength; index++) {
//     console.log(`${table} * ${index} = ${table * index}`);
//   }
// } else {
//   alert("Enter a valid number!");
//   Prompt();
// }
