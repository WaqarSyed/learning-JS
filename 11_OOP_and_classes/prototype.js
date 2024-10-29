//! this file is for  Purely understanding the prototype
//* Prototype is the property on constructor function that will be inherited by its instance, prototype and __proto__ are basically the same thing but accessed from different angles
//* __proto__ is the property of every variable that is pointing to the parent object that it's inheriting from
//! So, what we are intending to do is , we are trying to understand the specific use case that how the frameworks
// and libraries are actually built and how we can bind newly created methods with the Core Object
//! that's all because of the prototype property of the constructor

//TODO1: we want the built in functionality for trimming the string and returning the actual length (we can exlicitly
//TODO1: use the.trim() to achieve this but we are trying to understand how we can bake that functionality and bind
//TODO1: it to every string we create)
let myUser = "waqar     ";
// console.log(myUser.length);
Object.prototype.waqar = function () {
  console.log("Hello waqar");
  console.log(this);
};
String.prototype.trueLength = function () {
  console.log(this);
  console.log(`Actual length of the string is ${this.trim().length}`);
};
const newUser = "Syed Ali         ";
newUser.trueLength();
const myHeroes = ["Thor", "Spiderman"];
let heroPower = {
  Thor: "hammer",
  Spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.Spiderman}`);
  },
};
// console.log(newUser.waqar());
// console.log(myHeroes.waqar());

Array.prototype.isSyed = true;
// console.log(myHeroes.isSyed);
// console.log(heroPower.isSyed);
//* So, whenever we bind a property/method to Object.prototype is some sort of Global for all the arrays , strings that are being created , they inherit from Object but if we bind some property to Array.Prototype then this is only bound to Arrays because : Object is the top in heirarchy and all others inherit from it
//! inheritance
//* old syntax
const User = {
  name: "chai",
  email: "chai@google.com",
};
const Teacher = { makeVideo: true };
const TeachingSupport = { isAvailable: false };
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
//* new Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
"codes110    ".trueLength();
