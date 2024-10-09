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
const users = { 1: "waqar" };
if (Object.keys(users).length > 0) {
  console.log("User Received");
} else if (Object.keys(users).length === 0) {
  console.log("No user found");
}
