// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abcdef`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("syed", "ali@google.com", "12345");
// console.log(chai.encryptPassword());
// console.log(chai);
// console.log(chai.changeUsername());
//! Behind the Scenes :: how we achieve the same functionality without "class" keyword

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abcdef`;
};
User.prototype.changeName = function () {
  return `${this.username.toUpperCase()}`;
};
const newUser = new User("asif", "asif@goodle.com", "98765");
console.log(newUser);
console.log(newUser.encryptPassword());
console.log(newUser.changeName());
