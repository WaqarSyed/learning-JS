// const email = {};

// if (email) {
//   console.log("Email received");
// } else {
//   console.log("no email received");
// }

//? What are falsy values ?
//! "", false, 0, -0, BigInt 0n, null , undefined , NaN
//? Truthy values
//* " ", 'false', '0', [], {}, function(){}

//? how we can check with empty arrays & objects
// const users = [];
// if (users.length > 0) {
//   console.log("User Received");
// } else if (users.length === 0) {
//   console.log("No user found");
// }
//? how we can perform the same check for objects
// const users = { 1: "waqar" };
// if (Object.keys(users).length > 0) {
//   console.log("User Received");
// } else if (Object.keys(users).length === 0) {
//   console.log("No user found");
// }
//? note the following for interviews , competitive programming that
// console.log(false == 0);
// console.log(false == "");

// console.log(0 == "");
//! all of the above 3 scenarios return true

//* Logical operators are '&&' and '||'
//!  && returns true when all of the condition checks are true
//! || returns true when at least of the condition check is true

//? Nullish Coalescing Operator (??)
//* Basically , it's safety check for null and undefined values, whenever we fetch data from an API or DB Query
//* it may result in null or undefined so , that operator perform safety checks , let's have a look at example code
// let val1 = 23 ?? 7;
//! above code line will assign 23 to val1
//* now below line will assign 7 , so it's checking to avoid null or undefined to be assigned
// let val1 = null ?? 7;
// console.log(val1);

let val1 =
  null ??
  undefined ??
  (function num() {
    return 4;
  })();
console.log(val1);
//? Terniary Operator
// condition ? true : false
// const score = 100;
// score >= 80 ? console.log("greater than 80") : console.log("less than 80");
