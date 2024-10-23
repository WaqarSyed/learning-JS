//?: Javascript Async Code (important for interview perspective)
/* JS is a synchronous and single threaded language( it means the code runs line by line and performs a
single task at a time) and this also known as the "Default Javascript"
 */
//?: Execution Context
/*
Execute one line of code at a time 
//* each operation waits for the last one to complete before executing
study the call stack and Memory heap in details 

*/
//? Blocking vs Non-Blocking code
/*  //*Blocking Code stops or "blocks" further execution of any code until the current operation completes. This means
*the program waits for a task (such as reading a file or making an API call ) to finish before moving onto the next line of code.
!How it Works: The thread is "blocked" during the execution of time-consuming operations. In this case, no other code can run until the current task completes.
Example:: 
const fs = require('fs');
const data = fs.readFileSync('/path/to/file.txt');
console.log('File content:', data);
console.log('This will execute after file is read');
? Use Case: Blocking code is useful in situations where you need to ensure one operation finishes completely before 
?proceeding, and where performance or responsiveness is not an issue (e.g., small scripts or initialization tasks).

?Downside: If the operation takes time (e.g., file reading, network requests), the entire application could freeze, 
?leading to poor performance and bad user experience, especially in web browsers or servers handling multiple users.

*/
/* //* Non-Blocking code allows other operations to continue while the current operation is still being processed .
* instead of waiting for a task to finish javascript moves on to execute other code . the time consuming task is 
* handled asynchronously , and when it finishes , a callback function , promise or event is used to process the result
! How it Works: Non-blocking code relies on asynchronous mechanisms such as callbacks, promises, or async/await to 
! prevent blocking the main thread while performing tasks that take time (e.g., I/O operations, network requests). 
Example : 
const fs = require('fs');
 !Non-blocking (asynchronous) file read
fs.readFile('/path/to/file.txt', (err, data) => {
  if (err) throw err;
  console.log('File content:', data);
});
console.log('This will execute immediately, without waiting for file to be read');


? Use Case: Non-blocking code is especially useful for tasks that involve I/O operations 
? (such as reading files, making HTTP requests, or querying databases) and when the program needs to stay responsive 
?(e.g., in server environments like Node.js).

! Advantages:

! Responsiveness: Non-blocking code keeps the application responsive, as it allows other tasks to proceed without 
! waiting for slow operations.
! Concurrency: In environments like Node.js, it allows multiple I/O operations to happen concurrently, even though 
! JavaScript is single-threaded.
! Downside: Non-blocking code can be harder to manage and debug, especially when dealing with multiple asynchronous 
! operations that depend on each other (this can lead to issues like "callback hell"). This is mitigated by modern 
! async techniques such as promises and async/await.
*/
