//* under the hood working of getter and setter functions
//! remember that we can get and set the getter , setter functions just because of "class" keyword
//* following is the old implementation to get and set values
//! this is how basically the getter/setter functions are designed from line : 9 to 16
function User(email, passowrd) {
  this.email = email;
  this.passowrd = passowrd;

  Object.defineProperty(this, "passowrd", {
    set: function (value) {
      this.passowrd = value;
    },
    get: function () {
      return this.passowrd.toUpperCase();
    },
  });
}

const newUser = new User("ali@a.com", "asdf");

console.log(newUser);
