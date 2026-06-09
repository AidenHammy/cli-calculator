const args = process.argv;

const numbers = args.slice(3).map(Number); // Take user inputs, convert all of them from strings to numbers and stores them in an array.
const cmd = args[2];
const history = [];

const commands = {
  add: addition,
  sub: subtraction,
  mul: multiplication,      // JS moves function declarations to the top automatically (hoisting)
  div: division,            // so I can use functions here even if they are written later in the file.
  sq_root: sqrt,
  pow: exponential,
  log: log_,
  help: help,
  history: showHistory
};

const expectedArgs = {
  add: 2,
  sub: 2,
  mul: 2,
  div: 2,
  sq_root: 1,
  pow: 2,
  log: 1,
  help: 0,
};


if (!cmd) {
  console.log(`\nPlease provide a command. Try: "help"`);
  return;
}

if (!commands[cmd]) {
  console.log(`\nUnknown command: ${cmd}. Type "help" for available list of commands.`);
  return;
}

console.log("Command: ", args[2]);
console.log("First number: ", numbers[0]);
console.log("Second number: ", numbers[1]);

// args.slice(3) -> Take everything from index 3 onwards. Remove node, file and command
// .filter(v => v !== undefined) -> Remove any missing values or inputs.
// .length -> count how many are left

//const actualArgs = args.slice(3).filter((v) => v !== undefined).length;
//if (actualArgs !== expectedArgs[cmd]) {
  //console.log(`${cmd} expect ${expectedArgs[cmd]} argument(s) but got ${actualArgs}`);
  //return;
//}

// CLI arguments don't insert "undefined" values for missing inputs.
// Missing arguments simply do not appear in the array returned by slice(),
// so we can safely use numbers.length for argument count validation.

if (numbers.length !== expectedArgs[cmd]) {
  console.log(`${cmd} expects ${expectedArgs[cmd]} argument(s) but got ${numbers.length}`);
  return;
}

if (cmd === "div" && numbers[1] === 0) {
  console.log("Division error: Denominator cannot be 0");
  return;
}

if (cmd === "sqrt" && numbers[0] < 0) {
  console.log("Square root error: Cannot take sqrt of negative numbers.");
  return;
}

// isNaN() function determines whether a value is Nan (Not-a-Number) after first converting that value into a number
// Returns true if the processed value is an invalid number and false if it's a valid number

if (expectedArgs[cmd] >= 1 && isNaN(numbers[0])) {
  console.log("Argument 1 must be a number.");
  return;
}

if (expectedArgs[cmd] === 2 && isNaN(numbers[1])) {
  console.log("Argument 2 must be a number.");
  return;
}

function addition() {
  let add = numbers[0] + numbers[1];
  console.log(`\n${numbers[0]} + ${numbers[1]} = ${add}`); // template strings need backticks
  history.push(`${numbers[0]} + ${numbers[1]} = ${add}`);
  return;
}

function subtraction() {
  let sub = numbers[0] - numbers[1];
  console.log(`\n${numbers[0]} - ${numbers[1]} = ${sub}`);
  history.push(`${numbers[0]} - ${numbers[1]} = ${sub}`);
  return;
}

function multiplication() {
  let mul = numbers[0] * numbers[1];
  console.log(`\n${numbers[0]} x ${numbers[1]} = ${mul}`);
  history.push(`${numbers[0]} x ${numbers[1]} = ${mul}`);
  return;
}

function division() {
  let div = numbers[0] / numbers[1];
  console.log(`\n${numbers[0]} / ${numbers[1]} = ${div}`);
  history.push(`${numbers[0]} / ${numbers[1]} = ${div}`);
  return;
}

function sqrt() {
  let sq_root = Math.sqrt(numbers[0]);
  console.log(`\nSquare Root of ${numbers[0]} = ${sq_root}`);
  history.push(`Square Root of ${numbers[0]} = ${sq_root}`);
  return;
}

function exponential() {
  let pow = Math.pow(numbers[0], numbers[1]);
  console.log(`\nPower of ${numbers[1]} to the base ${numbers[0]} = ${pow}`);
  history.push(`Power of ${numbers[1]} to the base ${numbers[0]} = ${pow}`);
  return;
}

function log_() {
  let Log = Math.log(numbers[0]);
  console.log(`\nNatural log of ${numbers[0]} = ${Log}`);
  history.push(`Natural log of ${numbers[0]} = ${Log}`);
  return;
}

function showHistory(){
  if (history.length === 0) {
    console.log("No previous history");
    return;
  }

  console.log("History: \n");
  for(let i = 0; i < history.length; i++) {
    console.log(`${i+1}. ${history[i]}`);
  }
}

function help() {
  console.log(
    `Available commands:
    add a b  ->  addition
    sub a b  ->  subtraction
    mul a b  ->  mulitplication
    div a b  ->  division
    sqrt a   ->  square root
    pow a b  ->  exponential
    log a    ->  logarithm 
    help     ->  show this message
    history  ->  show calculation history`
  );
  return;
}

if (commands[cmd]) {
  commands[cmd]();
  return;
}