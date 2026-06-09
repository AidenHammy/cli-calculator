const args = process.argv;

console.log("Command: ", args[2]);
console.log("First number: ", args[3]);
console.log("Second number: ", args[4]);

// isNaN() function determines whether a value is NaN (Not-a-Number) after first converting that value into a number
// It returns true if the processed value is an invalid number, and false if its a valid number

let firstNum = Number(args[3]);
if (isNaN(firstNum)) {
  console.log("Invalid input, please enter a number!");
  return;
}
let secondNum = Number(args[4]);
if (isNaN(secondNum)) {
  console.log("Invalid input, please enter a number!");
  return;
}
const cmd = args[2];

function addition() {
  let add = firstNum + secondNum;
  console.log(`\n${firstNum} + ${secondNum} = ${add}`); // template strings need backticks
}

function subtraction() {
  let sub = firstNum - secondNum;
  console.log(`\n${firstNum} - ${secondNum} = ${sub}`);
}

function multiplication() {
  let mul = firstNum * secondNum;
  console.log(`\n${firstNum} x ${secondNum} = ${mul}`);
}

function division() {
  let div = firstNum / secondNum;
  if (secondNum === 0) {
    console.log("\nCannot divide by zero!");
    return;
  }
  console.log(`\n${firstNum} / ${secondNum} = ${div}`);
}

function sqrt() {
  let sq_root = Math.sqrt(firstNum);
  console.log(`\nSquare Root = ${sq_root}`);
}

function pow() {
  let power = Math.pow(firstNum, secondNum);
  console.log(`\n${firstNum} ^ ${secondNum} = ${power}`);
}

function help() {
  console.log(`
    Available commands:
    add, sub, mul, div, sqrt, pow`);
}

const commands = {
  add: addition,
  sub: subtraction,
  mul: multiplication,
  div: division,
  sqrt: sqrt,
  pow: pow,
  help: help,
};

if (commands[cmd]) {
  commands[cmd]();
} else {
  console.log("Invalid Input. Try again.");
}