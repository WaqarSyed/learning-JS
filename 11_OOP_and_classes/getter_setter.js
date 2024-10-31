/*
* if we want to set a setter function then we must set a getter function : both are equally important
! we have changed the getter function return in case we don't want to send the orignal password to everyone 
! remember to create a new property name as in line :16 for password as _password, otherwise the RangeError : Maximum call stack size is exceeded 
*/
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    // return this._password.toUpperCase();
    return "Access denied from server";
  }
  set password(value) {
    this._password = value;
  }
}
const ali = new User("ali@ali.com", "abcd");
console.log(ali);
console.log(ali.password);
