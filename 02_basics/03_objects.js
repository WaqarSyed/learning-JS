//following method of creating object using constructor , creates a singleton object : only one instance
const tinderUser = new Object();

tinderUser.id = "abc123";
tinderUser.name = "John Doe";
tinderUser.age = 30;
tinderUser.gender = "male";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const anotherUser = {
  email: "alisyedwaqar108@gmail.com",
  password: "123456",
  fullname: {
    username: {
      first: "Ali",
      last: "Syed Waqar",
    },
  },
};

// const superUser = Object.assign({}, tinderUser, anotherUser);
// console.log(superUser);

// console.log(anotherUser.fullname.username);

// we can use Object.assign method to combine objects but remember it returns a new object
// so we need to assign it to a variable

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const objCombined = Object.assign({}, obj1, obj2, obj3);

// another method to combine is use of Spread operator, we can combine above objects like that:
const objCombined = { ...obj1, ...obj2, ...obj3 };

// console.log(objCombined);

// console.log(tinderUser);

// method to extract all the keys of an object , and it RETURNS array
// console.log(Object.keys(tinderUser));

// method to extract all the values of an object , and it RETURNS array
// console.log(Object.values(tinderUser));

// rarely used method entries , creates each key: value pair as an array
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// we can destructer objects when handling api responses in the following way, and we can also name the destructured attribute as we want using a " : "
const { email: anotherEmail } = anotherUser;

console.log(anotherEmail);
