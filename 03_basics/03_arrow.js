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

//? what happens we console.log(this) inside a function, let's have a look at this

function tryingThis() {
  let name = "syed ";
  console.log(this.name);
}
tryingThis();

//* whenever we console.log(this) inside a function and returns the global object and different methods
//! what happens when we declare a variable inside a function & try to log this variable ,
//* it returns undefined, means that we can only tap into that functionality only in objects
