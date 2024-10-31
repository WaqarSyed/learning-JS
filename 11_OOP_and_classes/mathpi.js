//? Why we can't change the value of Math.PI
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
//* becuase when we get its properties using above lines of code , it's obvious that : it has value which is set to 3.14159.. and it's "writable", "enumerable", and "configurable" properties are set to false . That's why we can't change its value
// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);
//! Basically this is the implementation of "Core JavaScript" into our Browser/Node , So, no matter how many times we try to overwrite it or change it :: it's writable property is set to false in so detail/depth and also has c++ checks that it cannot be changed
//? can we make such objects , so whenever someone uses our library/framework and can we do that ?
const developer = {
  name: "syed waqar",
  experience: "8 months",
  certification: true,
  sendMail: function () {
    console.log("Hello Syed ! would you like to work for us");
  },
};
// console.log(developer);
// console.log(Object.getOwnPropertyDescriptor(developer, "name"));
//* line 21 to 24 makes the "name" to not be writable and iterable
// Object.defineProperty(developer, "name", {
//   writable: false,
//   enumerable: false,
// });
//? how can we make a complete object not to be iterable  ?
Object.defineProperties(developer, {
  name: { enumerable: false },
  experience: { enumerable: false },
  certification: { enumerable: false },
  sendMail: { enumerable: false },
});
for (let [key, value] of Object.entries(developer)) {
  if (typeof value !== "function") {
    console.log(`${key} ::  ${value}`);
  }
}
console.log(Object.getOwnPropertyDescriptors(developer));

// developer.name = "syed ali";

// console.log(developer.name);
