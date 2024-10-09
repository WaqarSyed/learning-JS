/* Control flow refers to the order in which statements are executed in a program, which is typically from the top
to bottom of the Code */
//! <, > ,<=, >=, ==, ===, !=, !== , These are common comparison operators
// * However , using control flow structures, such as conditionals & loops, we can change the way a program flows
// let isUserLoggedIn = false;
// //! below is a conditional code
// if (isUserLoggedIn) {
//   console.log("Welcome Back");
// } else {
//   console.log("Head over to the login page");
// }
// console.log("Execute in any case, due to global scope");
//! variables declared with "var" possess a completely global scope , so avoid using them , variables must not be
//! available outside of their containing scope
//! following example code produces Refference error on line 20 because we are accessing a const outside of its scope
/* if (true) {
  const power = "fly";
  console.log(`user has the power to ${power}`);
}
console.log(`user has the power to ${power}`); */

/* following example code uses "var", no error using var but its a bad practice that variables are 
 accessible outside of their scope */
// if (true) {
//   var power = "fly";
//   console.log(`user has the power to ${power}`);
// }
// console.log(`user has the power to ${power}`);
//? how to check for multiple conditions
//* we can use nested if else statements

const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard) {
  console.log("allow to buy course");
}
//! we have && and || operator to check conditions
