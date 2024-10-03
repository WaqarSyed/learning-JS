const user = {
  username: "waqar",
  age: 26,
  welcomeMessage: function () {
    console.log(this);
    console.log(this.username);
  },
};
// * "this" basically refers to the current context
user.username = "ali";
user.welcomeMessage();
