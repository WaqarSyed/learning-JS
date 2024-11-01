//* under the hood working of getter and setter functions
//! remember that we can get and set the getter , setter functions just because of "class" keyword
//* following is the old implementation to get and set values
//! this is how basically the getter/setter functions are designed from line : 9 to 16
function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "password", {
    set: function (value) {
      this._password = value;
    },
    get: function () {
      return this._password.toUpperCase();
    },
  });
  Object.defineProperty(this, "email", {
    set: function (value) {
      this._email = value;
    },
    get: function () {
      return this._email.toUpperCase();
    },
  });
}

let waqar = new User("ali@a.com", "asdf");

console.log(waqar);
console.log(waqar.password);
