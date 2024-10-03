const user = {
  username: "waqar",
  age: 26,
  welcomeMessage: function () {
    console.log(this);
    console.log(this.username);
  },
};
// * "this" basically refers to the current context
user.username = "ali";
// user.welcomeMessage();

// ? INTERVIEW QUESTION:  what is the global scope of "this" in browser
// ! console.log(this) returns us an window object that contains hundereds of methods and properties
//* and in node , when console.log(this) it returns an empty object , means nothing is defined in that context
// console.log(this);

//? what happens when  we console.log(this) inside a function, let's have a look at this

// function tryingThis() {
//   let name = "syed ";
//   console.log(this.name);
// }
// tryingThis();

//* whenever we console.log(this) inside a function and returns the global object and different methods
//! what happens when we declare a variable inside a function & try to log this variable ,
//* it returns undefined, means that we can only tap into that functionality only in objects
// ? now lets try the same thing inside an arrow function
//* when log this inside an arrow function it returns "{}", means there is no context of this
//! if we try to access the this.variable inside an arrow function , it also returns undefined
// const tryWithArrowFunction = () => {
//   let name = "syed";
//   console.log(this.name);
// };
// tryWithArrowFunction();
//++++++++++++++++++++++++++++++++++++++++ PURE ARROW FUNTIONS ++++++++++++++++++++++++++++++++

//* we can declare arrow functions by removing the function keyword while defining them and can name them using variables
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(4, 7));
//! following is the definition of same function as above but this is callled implicit return method
//* inside implicit return what we can do is , if we are returning a single line from the function , we can remove curly braces and also the return keyword
// const addTwo = (num1, num2) => num1 + num2;
// * here is another variation for better understanding, we can rap the return value in parenthesis(), this method is widely used in React library
// const addTwo = (num1, num2) => num1 + num2;
// console.log(addTwo(4, 7));
//! note that whenever we rap our return value in curlyBraces {}, we must have to use the return keyword

//* we can return object using the above technique of definition using implicit return
const addTwo = (num1, num2) => ({ name: "waqar syed " });

console.log(addTwo(1, 2));
