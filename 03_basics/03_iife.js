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

//! we can declare two or more IIFEs in the same file but each IIFE call must end with a semicolon
//! IIFE defined  using arrow function method are also known as unnamed IIFE
