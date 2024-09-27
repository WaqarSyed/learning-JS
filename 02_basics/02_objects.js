const mySymbol = Symbol("key1")
const user = {
    [mySymbol]: "mykey1",
    name: "syed waqar ali shah",
    "age": 23,
    isLoggedIn: true
}
// console.log(typeof user[mySymbol]);

// console.log(user["age"]);
// console.log(user.name);
// console.log(user.isLoggedIn);

// Object.freeze(user)

// user.name = "shah g";

// console.log(user["name"]);

// console.log(user)
// using back-ticks is also known as string interpolation
user.greeting = function () {
    return console.log(`hello ${this.name}`)
}

console.log(user.greeting())