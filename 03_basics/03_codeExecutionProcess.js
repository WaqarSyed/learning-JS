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
console.log(result1);
console.log(result1);
//TODO1: Global execution context is created and then referred to 'this' variable
//TODO2: Memory Creation Phase/ Creation Phase :
//* all the variables are assigned memory location but not initialized(means that :
//! just varibles are allocated with memory but not assigned values, and by default they all hold 'undefined')
//* function name holds its definition
//TODO3: Execution Phase
//* varibles are assigned with the values '10, 5'
//* when function call appears as in line 16 we are inoking the addNum function and holding its return value
//* inside a variable named as 'result1'
//? what happens when a function call appears
//! a new varibale environment + execution thread is created
//! this environment is particularly for that function and it consists of further two sub phases
//* Memory phase and Execution phase
//? what happens when a function is executed successfully
//* new variable environment + execution thread are deleted for better memory utilization
//? What is call Stack
//* call stack is responsible for managing the execution of function calls, It operates as a 'LAST IN , FIRST OUT' data structure
//!meaning the last function called is the first one to be executed and resolved.

//? enlist fundamental responsibilies of the call stack
//* Tracking function calls, Managing Execution Contexts, Handling function execution order, Error Handling
