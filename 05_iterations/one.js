// for loop
//! ctrl + D is shortcut for selection of same variable instances
// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best number");
//   }
//   console.log(element);
// }
//! shift + alt + A is shortcut for toggle block comment
/* for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j} `);
  }
  console.log(`table of ${i} is completed upto 10 `);
} */
// const myArray = ["batman", "superman", "spiderman"];
// console.log(myArray.length);

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }
// ? break and continue
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected 5 `);
    continue;
  }
  console.log(i);
}
//* break basically breaks the flow and take out the containing flow
//* continue neglects the current iteration
//! testing phase
