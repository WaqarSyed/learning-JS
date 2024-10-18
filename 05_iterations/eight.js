//! array.reduce()
/* const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum = myNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
); */
// console.log(sum);
//* in the above code we are using a reduce() method , which holds the result of calculation in accumulator and pass that to the next iteration
//* in the end a single accumulator value is returned
//! it can be used widely in shopping carts to sum the bills of items
//* let's look at the following example
const shoppingCart = [
  { title: "js course", price: 2999 },
  { title: "React Course", price: 4999 },
  { title: "express Course", price: 3499 },
];
const totalCost = shoppingCart.reduce(
  (accumulator, currentValue) => currentValue.price + accumulator,
  0
);
console.log(totalCost);
