//never use var because it has a global scope , and can produce confusions in code execution

let a = 10;
var b = 20;
const c = 30;

// if we redeclare let and const inside some function or loop scope , their global value is not going to be affected
if (true) {
  let a = 60;
  var b = 77;
  const c = 45;
}

console.log(a);
console.log(b);
console.log(c);
