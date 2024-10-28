// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
/* A promise is in one of these states:
 * pending: neither fulfilled nor rejected.
 * completed: meaning that the operation was completed successfully.
 * rejected: meaning that the operation failed. */
//! Note that before consuming promises we must be able to create promises
//* study Q and Bluebird in detail

// const promiseOne = new Promise(function (resolve, reject) {
//   //Do an Async task
//   //DB calls, cryptography, network calls
//   setTimeout(() => {
//     console.log("Async task is complete");
//     resolve();
//   }, 1000);
// });
// promiseOne.then(function () {
//   console.log("Promise Consumed");
// });

new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 2000);
}).then(() => {
  console.log("task 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Syed Waqar", email: "alisyedwaqar108@gmail.com" });
  }, 2000);
});
promiseThree.then((user) => {
  console.log(`Name : ${user.name} Email: ${user.email} `);
});

/* const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Codes110", password: "12345" });
    } else {
      reject(`Error: Something Went Wrong`);
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise four either resolved or rejected");
  }); */
//! Now , following is a new approach to consume Promises , mostly useful in making DB connections,
//!So when no DB connection is established we don't want to move forward in this case
//* We are using Async/Await to consume that promise

/* const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Javascript", password: "freecodecamp" });
    } else {
      reject("Error : Js went wrong");
    }
  }, 1000);
});
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive(); */

/* async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    const data = response.json();
    console.log(data);
  } catch (error) {
    console.log("ERROR:  ", error);
  }
}
getAllUsers();
 */

fetch("https://api.github.com/users/waqarSyed")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
//! Following are the important things to know about fetch() API
//* The global fetch method starts the process of fetching a resource from the network , returning a promise which is
//*fulfilled once the response is available.
//? Interview Question : Suppose you made request using (fetch) promise and it came with a ERROR CODE: 404, how can get hold of it (either in resolve
//? or reject)
//* we will get that in resolve because it's response from the server that we are tapping. reject only triggers when
//* we are unable to make the request
//! it means our request don't know the meaning of status codes.
/*
A fetch() promise only rejects when a network error is encountered (which is usually when there is permissions issue 
or similar). A fetch() promise does not reject on HTTP errors (404, etc). Instead a then() handler must check the 
Response.ok and/or Response.status properties.
! Whenever we make a fetch request : it executes two primary tasks : 1:: to make the memory for upcoming Data and makes
! some private fields (Data, onFulfilled[], onRejection[]) , also referred as (Data, Resolve, Reject)
! 2:: makes the network request using node/Web-browser and this request is either resolved or rejected
*/
