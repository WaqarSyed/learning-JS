class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME IS : ${this.username}`);
  }
}
//* NOTE THAT: due to the syntactic sugar of 'class' keyword now we don't have to use the .call / .bind method to call an external function
//* we can get the same functionality using "super" keyword that refers to the superClasss' constructor method and automatically carries the current Context which is calling the Constructor of User Class
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`${this.username} added the Course `);
  }
}
const sirTahir = new Teacher("Tahir", "tahir@aiou.edu.pk", "12344");
console.log(sirTahir);
console.log(sirTahir.logMe());
console.log(sirTahir instanceof User);

const superUser = new User("superUser");
// console.log(superUser);
// console.log(superUser.logMe());
// superUser.addCourse();
//! "instanceof" keyword is used to know whether the and object belongs to a particular class or not
