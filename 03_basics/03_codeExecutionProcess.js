//? How does javascript executes code + call stack
//!Here are the phases in sequence:

//* Parsing (Creation Phase)
//* Compilation (JIT - Just-In-Time Compilation)
//* Execution (Execution Phase)
//* Event Loop & Asynchronous Handling
//* Garbage Collection (Memory Management)
//! let's understand the process by simulating an example:
let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
