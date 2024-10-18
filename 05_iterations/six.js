// const coding = ["js", "ruby", "python", "html", "css"];
// const values = coding.forEach((item) => {
//   console.log(item);
// });
// console.log(values);
//! So, forEach returns "undefined" means that it returns nothing
//* Basically , filter method checks for the condition, elements which satisfy the condition will be returned in a new array
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);
/* const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => {
  num > 4;
});
console.log(newNums); */
//! in the above code snippet , we are using '{}' and they need a must have return statement
//! So , whenever we use curly braces : it means we are opening a new scope and each scope must include a return statement
//? how to handle data which comes from API response? let's look at the following example
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Sience", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
];

const userBooks = books.filter(
  (bk) => bk.genre == "History" && bk.publish > 1990
);
console.log(userBooks);
