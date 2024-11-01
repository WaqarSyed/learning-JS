//! rarely used in production codebases
const User = {
  _email: "ali@ali.com",
  _password: "abcdef",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
  get password() {
    return this._password.toUpperCase();
  },
  set password(value) {
    this._password = value;
  },
};
const waqar = Object.create(User);
console.log(waqar.email);
