// const coding = ["js", "ruby", "python", "html", "css"];
// const values = coding.forEach((item) => {
//   console.log(item);
// });
// console.log(values);
//* So, forEach returns "undefined" means that it returns nothing

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => {
  num > 4;
});
console.log(newNums);
//! in the above code snippet , we are using '{}' and they need a must have return statement
