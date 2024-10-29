//* "this" keyword refers to the current context
//! Javascript default behaviour is 'prototypel' :: so if javascript is not getting something it will access parents,
//! grand-parents, ancestors and so on... since it finds the null value
//* So , this prototype is crucial in JS and due to prototype we get the following accesses
//* this keyword, new keyword, classes, and inheritance or prototypel inheritance is just because of "PROTOTYPE"
//! everything in javascript is basically an object
//! when we access prototype in array : we get access to prototype and when we again try to access prototype an object of prototype is returned and after the object we get "null"
//? is function an object ??!
function multiplyBy5(num) {
  return num * 5;
}
// multiplyBy5.power = 3;
// console.log(multiplyBy5(6));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

//* note that in above lines of code we are using "." syntax which is associated with objects
//! So, a function is a function and also can be behaved like an object, end of the day everything is Object

function User(name, score) {
  this.name = name;
  this.score = score;
}
User.prototype.increment = function () {
  console.log(this.score++);
};

const userOne = User("shah", 9);
const userTwo = new User("syed", 12);
userTwo.increment();
userTwo.increment();
// console.log(userTwo.increment());

/* 
* IMP: JS does not provide constructor function through classes instead it provides through "new" keyword 

Here's what happens behind the scenes when the new keyword is used:
!A new object is created: 
The new keyword initiates the creation of a new JavaScript object.
!A prototype is linked: 
The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.
!The constructor is called: 
The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, 
the newly created object, to be the intended return value.
!The new object is returned: 
After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function,etc.), 
the newly created object is returned.

*/
