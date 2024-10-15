const coding = ["js", "ruby", "python", "html", "css"];
// coding.forEach((element) => {
//   console.log(element);
// });
//! forEach is used to perform some operations for every element of the array
//* we can also pass regular functions as arguments instead of a callback
/* function greet(element) {
  console.log(element);
}

coding.forEach(greet);
 */
//! remember that the callback of forEach also holds the "(element, index , arr)" parameters
coding.forEach((element, index, arr) => {
  console.log(element, index, arr);
});
//* so, we can get access to the individual element of array , index location of the particular elements and the complete array.
