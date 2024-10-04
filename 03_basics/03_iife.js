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
(function dbConnection() {
  console.log("DB connected");
})(/*these parenthesis are used to call the function after definition */);
//* above both standard methods of writing functions are also known as named IIFE
