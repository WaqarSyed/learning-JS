// //never use var because it has a global scope , and can produce confusions in code execution

// let a = 10;
// var b = 20;
// const c = 30;

// // if we redeclare let and const inside some function or loop scope , their global value is not going to be affected
// if (true) {
//   let a = 60;
//   var b = 77;
//   const c = 45;
// }

// console.log(a);
// console.log(b);
// console.log(c);
// so, we can say that : {} is the scope
// *whenever you declare curly braces , it's most likely to creating a new scope

// *child functions can access parent function's variables but parent function's cannot access child components variables

function one() {
  const name = "waqar";

  function two() {
    const motivation = " chai aur code";
    console.log(`${name} motivation is ${motivation} & BEYOND CODING PODCAST`);
  }

  two();
  // ! error because we are accessing motivation variable out of its scope, we will again try using commenting below line
  // console.log(motivation);
}
// one();
//+++++++++++++++++++++++++++++++++ INTERESTING POINT +++++++++++++++++++++++++++++++++++++++++
// * same in the  case of if statement's scope

// ? can we access a function before its declaration , seems interesting lets try it
console.log(addOne(6));
function addOne(num) {
  return ++num;
}

// * above method is the standard method for declaring functions, through this we can call a function before its definition
