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
multiplyBy5.power = 3;
console.log(multiplyBy5(6));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
//* note that in above lines of code we are using "." syntax which is associated with objects
//! So, a function is a function and also can be behaved like an object, end of the day everything is Object
