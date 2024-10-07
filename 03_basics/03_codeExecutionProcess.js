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

//TODO1: Global execution context is created and then referred to 'this' variable
//TODO2: Memory Creation Phase/ Creation Phase :
//* all the variables are assigned memory location but not initialized(means that :
//! just varibles are allocated with memory but not assigned values, and by default they all hold 'undefined')
//* function name holds its definition
//TODO3: Funtion Execution Phase
//* when function call appears as in line 16 we are inoking the addNum function and holding its return value
//* inside a variable
