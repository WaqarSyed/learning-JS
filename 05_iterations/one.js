// for loop
//! ctrl + D is shortcut for selection of same variable instances
// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best number");
//   }
//   console.log(element);
// }

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j} `);
  }
  console.log(`table of ${i} is completed upto 10 `);
}
