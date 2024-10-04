//? IMEDIATELY INVOKED FUNCTION EXPRESSIONs (IIFE)
/*IIFE is function that needs to be executed right after its definition , e.g: we have a separate file for database
 connection. And we want the database connection to established as our application loads , for this purpose IIFE 
 is best method to be utilized */
//? how we define an IIFE
// * following is the syntax for writing an iife and calling it , right after its definition

// function dbConnection() {
//   console.log("DB connected");
// }
// dbConnection();
//! following is another syntax for defining and calling an IIFE , right after its definition
// (function dbConnection() {
//   console.log("DB connected");
// })(/*these parenthesis are used to call the function after definition */);
//* above both standard methods of writing functions are also known as named IIFE
//? how we can pass arguments to an IIFE
// (function dbConnection(name) {
//   console.log(`DB connected ${name}`);
// })("waqar");
//! we can pass arguments in the parenthesis , being used for calling the function
//* we can define IIFE using arrow functions like below
((name) => {
  console.log(`DB connected ${name}`);
})(
  "shah g" /*these parenthesis are used to call the function after definition */
);
//! we can pass arguments to arrow function IIFE , in the same way we pass to standard method

//! we can declare two or more IIFEs in the same file but each IIFE call must end with a semicolon, basically they need to be separated
//! IIFE defined  using arrow function method are also known as unnamed IIFE

//? Why use IIFE?
/* FIRST REASON:: we can avoid pulluting the global scope with the use of IIFE, IIFEs help encapsulate code within 
their scope, and avoiding unintended interactions with the global scope 
SECOND REASON:: IIFEs create a private scope , isolating variables within the function , this 
is useful when we want to hide the implementation details and prevent accidental overwritting of variables 
THIRD REASON:: before ES6 introduced 'modules' , IIFEs were commonly used to simulate module behaviour by exposing 
only the necessary functionality , while keeping internal variables private . this was useful for organizing code
FOURTH REASON :: Avoiding name confilicts
FIFTH REASON :: IIFEs are often used to run initialization code that needs to execute once, such as setting up event
listeners , initializing variables or running configuration code
SIXTH REASON :: provided block scoping before ES6's 'let' and 'const' */
