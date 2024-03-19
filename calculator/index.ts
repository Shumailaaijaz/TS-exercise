import inquirer from "inquirer";

const answers = await inquirer.prompt([
  { message: "Emter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional statement
if (answers.operator === "Addition") {
  console.log(answers.firstNumber + answers.secondNumber);
} else if (answers.operator === "Subtraction") {
  console.log(answers.firstNumber - answers.secondNumber);
} else if (answers.operator === "Multiplication") {
  console.log(answers.firstNumber * answers.secondNumber);
} else if (answers.operator === "Division") {
  console.log(answers.firstNumber / answers.secondNumber);
} else {
  console.log("Please select valid operator");
}
