#! /usr/bin/env node

import inquirer from "inquirer";

const retort = await inquirer.prompt([
  {
    message: "Enter your firstValue here:",
    type: "number",
    name: "firstValue",
  },
  {
    message: "Enter your secondValue here:",
    type: "number",
    name: "secondValue",
  },
  {
    message: "Select any one of them.",
    type: "list",
    choices: ["Addition", "Subraction", "Multiplication", "Division"],
    name: "operator",
  },
]);

console.log(retort);

if (retort.operator === "Subraction") {
  console.log(retort.firstValue - retort.secondValue);
}
  else if (retort.operator === "Addition") {
  console.log(retort.firstValue + retort.secondValue);
}
  else if (retort.operator === "Multiplication") {
  console.log(retort.firstValue * retort.secondValue);
}
  else if (retort.operator === "Division") {
  console.log(retort.firstValue / retort.secondValue);
} 
  else {
  console.log("There is an error, Please! try again.");
}
