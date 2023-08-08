/* eslint-disable no-console */
// Callback example
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data);
  }, 1000);
}

function displayData(data) {
  console.log('Callback Example:');
  console.log(`Name: ${data.name}, Age: ${data.age}`); // Name: John, Age: 30
}

fetchDataWithCallback(displayData);

// Promise example
function fetchDataWithPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { name: 'Jane', age: 25 };
      resolve(data);
    }, 1000);
  });
}

function processAndDisplayDataWithPromise() {
  fetchDataWithPromise()
    .then((result) => {
      console.log('Promise Example:');
      console.log(`Name: ${result.name}, Age: ${result.age}`); // Name: Jane, Age: 25
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}

processAndDisplayDataWithPromise();

// Async/await example
async function fetchDataWithAsyncAwait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { name: 'Alice', age: 28 };
      resolve(data);
    }, 1000);
  });
}

async function processAndDisplayDataWithAsyncAwait() {
  try {
    const result = await fetchDataWithAsyncAwait();
    console.log('Async/Await Example:');
    console.log(`Name: ${result.name}, Age: ${result.age}`); // Name: Alice, Age: 28
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

processAndDisplayDataWithAsyncAwait();
