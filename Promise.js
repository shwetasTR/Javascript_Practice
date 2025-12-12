// Promises in JavaScript
// A Promise is an object representing the eventual completion or failure of an asynchronous operation

// Creating a basic Promise
const basicPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

// Consuming a Promise with .then() and .catch()
basicPromise
  .then(result => {
    console.log(result); // "Operation successful!"
  })
  .catch(error => {
    console.error(error);
  });

// Promise with setTimeout (simulating async operation)
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Waited for ${ms}ms`);
    }, ms);
  });
}

delay(1000).then(message => console.log(message));

// Promise chaining
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 500);
  });
}

fetchData()
  .then(result => {
    console.log(result); // 10
    return result * 2;
  })
  .then(result => {
    console.log(result); // 20
    return result * 3;
  })
  .then(result => {
    console.log(result); // 60
  });

// Promise.all - waits for all promises to resolve
const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve(42), 1000));
const promise3 = Promise.resolve("foo");

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // [3, 42, "foo"]
  });

// Promise.race - returns the first promise that resolves or rejects
const slowPromise = new Promise(resolve => setTimeout(() => resolve("slow"), 2000));
const fastPromise = new Promise(resolve => setTimeout(() => resolve("fast"), 1000));

Promise.race([slowPromise, fastPromise])
  .then(value => {
    console.log(value); // "fast"
  });

// Promise states: pending, fulfilled, rejected
// A Promise is always in one of these three states:
// 1. pending: initial state, neither fulfilled nor rejected
// 2. fulfilled: operation completed successfully
// 3. rejected: operation failed
