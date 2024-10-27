// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
/* A promise is in one of these states:
 * pending: neither fulfilled nor rejected.
 * completed: meaning that the operation was completed successfully.
 * rejected: meaning that the operation failed. */
//! Note that before consuming promises we must be able to create promises
//* study Q and Bluebird in detail

/* const promiseOne = new Promise(function (resolve, reject) {
  //Do an Async task
  //DB calls, cryptography, network calls
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("task 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Syed Waqar", email: "alisyedwaqar108@gmail.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(`Name : ${user.name} Email: ${user.email} `);
}); */

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
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
  });
