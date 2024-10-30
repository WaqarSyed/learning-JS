//! whenever we don't want to give the access of some methods to all the objects instantiated from a specific class , we use the keyword "static" infront of those methods
class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(` USERNAME is ::  ${this.username}`);
  }

  static generateID() {
    return 12345;
  }
}
const waqar = new User("waqar");
// console.log(waqar);
// console.log(waqar.generateID());
// waqar.logMe();

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const vivo = new Teacher("vivo", "vivo@vivo.com");
vivo.logMe();
console.log(vivo);
