const args = process.argv;

console.log("Command: ", args[2]);
console.log("First number: ", args[3]);
console.log("Second number: ", args[4]);

let firstNum = Number(args[3]);
let secondNum = Number(args[4]);
const cmd = args[2];


function addition(){
  let add = firstNum + secondNum;
  console.log("\nSum: ", add);
}

function multiplication(){
  let mul = firstNum * secondNum;
  console.log("\nMultiplication: ", mul);
}

function division(){
  let div = firstNum / secondNum;
  console.log("\nDivision: ", div);
}

const commands = {
  add: addition,
  mul: multiplication,
  div: division
};

if (commands[cmd]) {
  commands[cmd]()
} else {
  console.log("Invalid Input. Try again.");
}