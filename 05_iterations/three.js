//? for of loop
// const arr = [1, 2, 3, 4, 5];
// for (const element of arr) {
//   console.log(element);
// }

//* this loop can be used with any iterable object/array/string
/* const greetings = "hello world";
for (const greet of greetings) {
  if (greet == "w") break;
  console.log(greet);
} */

// Maps:
//! maps are mostly like objects, but maps remember the order of insertion and hold unique values
const map = new Map();
map.set("PK", "Pakistan");
map.set("FR", "France");
map.set("IN", "India");
map.set("IR", "Iran");
for (const [key, value] of map) {
  console.log(key, " : ", value);
}

//? can be iterate on objects with the for of loop ? // let's see
const gameObj = {
  gameOne: "Pubg",
  gameTwo: "IGI",
  gameThree: "COD",
};

for (const [key, value] of gameObj) {
  console.log(key, "~", value);
}

//! note that : we cannot iterate over objects using the standard method, explore the ways to iterate over objects in four.js
