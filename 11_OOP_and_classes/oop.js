// const user = {
//   name: "waqar ali",
//   email: "alisyedwaqar108@gmai.com",
//   status: true,
//   getUserDetails: function () {
//     // console.log("Got user details from the database");
//     // console.log(this.status);
//     console.log(this);
//   },
// };
//* we can use 'this' keyword to refer to the current Context
// console.log(user.name);
// console.log(user.getUserDetails());
// console.log(this);
//* 'this' in node is empty because currently there is nothing in global context but in browser it returns the window object
//! we can say that the 'new' keyword is the constructor function , look at the following example
function User(username, isLoggedIn, loginCount) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  this.loginCount = loginCount;
  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}
// const userOne = User("syed", true, 2);
// console.log(userOne);
// const userTwo = User("ali", false, 5);
// console.log(userTwo);
// console.log(userOne);
//! In the above example we are creating another instance from the constructor function User() but it overwrites the userOne because we are not using 'new' keyword
//* Constructor function basically provides a new copy without effecting other instances/ users
//* following is the best approach to use the constructor function
const userOne = new User("syed", true, 2);
const userTwo = new User("ali", false, 5);
console.log(userOne instanceof User);
//! so the following Object.constructor returns a referrence to itself
console.log(userTwo.constructor);

//? What happens when we use 'new' keyword ?
/*
 * STEP1: first of all an empty object is created also known as instance
 * STEP2: secondly a constructor function is called due to 'new' keyword, and this constructor function packs the
 * arguments into the empty object already created
 * STEP3: all the arguments passed to the function are injected into 'this' keyword
 * STEP4: all these packed arguments are returned in the function
 *
 */
