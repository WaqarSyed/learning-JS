function setUsername(username) {
  // Complex DB calls
  console.log("called setUsername");

  this.username = username;
}
function createUSer(username, email, password) {
  this.email = email;
  this.password = password;
  setUsername.call(this, username);
}

const chai = new createUSer("waqar", "ali@fb.com", "12345");
console.log(chai);
//! IMPORTANT :
//* createUser function is calling another function to set the username but when it is called its execution context is loaded on top of createUser
//* and the inner function by default uses its own context and when its execution is completed , it is removed from the call stack with its data
//* that's why we use .call method to explicitly call it and pass "this"(context of createUSer) and "username" which it is supposed to set up
