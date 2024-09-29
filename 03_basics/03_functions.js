// when we define a function that expects some values are called parameter, when we call the function and pass values are called arguments
// function addToNumbers(number1, number2) {
//   console.log(number1 + number2);
// }
// // one to notice here is , we've returned nothing so we have to return some value from the function
// const result = addToNumbers(5, 2);

// console.log(result);

// function addToNumbers(number1, number2) {
//   return number1 + number2;
//   console.log(
//     "wrong syntax , no code is executed after the return statement of a function"
//   );
// }

// const result = addToNumbers(8, 9);
// console.log(result);
// we can also pass default values
function loginUser(userName = "sam") {
  if (!userName) {
    console.log("Please enter your username");
    return;
  }
  return `${userName} just logged in `;
}

// we exercised that above loginUser function is printing nothing , because we haven't stored its value in any variable and console.log it
//lets look at the syntax for printing or getting its value
console.log(loginUser());
