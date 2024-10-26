// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
/* A promise is in one of these states:
 * pending: neither fulfilled nor rejected.
 * completed: meaning that the operation was completed successfully.
 * rejected: meaning that the operation failed. */
//! Note that before consuming promises we must be able to create promises
//* study Q and Bluebird in detail

const promiseOne = new Promise(function (resolve, reject) {
  //Do an Async task
  //DB calls, cryptography, network calls
  setTimeout(() => {
    console.log("Async task is complete");
  }, 1000);
});
