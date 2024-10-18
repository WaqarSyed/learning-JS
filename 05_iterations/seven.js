//! we can also use () instead of {} to get rid of return keyword
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/* const newNumbers = myNumbers.map((item) => {
  return item + 10;
}); */
//* we can also chain different methods
//! it's obvious from the below chaining example that : return value of 1st method is passed to the 2nd and so on...
const newNumbers = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((item) => item > 50);
console.log(newNumbers);
