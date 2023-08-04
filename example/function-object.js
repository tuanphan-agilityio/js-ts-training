const personWithFunction = {
  name: 'Alice',
  age: 30,
  // This is a Function Declaration as Shorthand
  greet() {
    // eslint-disable-next-line no-console
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
};

// Object with Arrow Function Method
const personWithArrowFunction = {
  name: 'Bob',
  age: 25,
  greet: () => {
    // eslint-disable-next-line no-console
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
};

personWithFunction.greet(); // Hello, my name is Alice and I am 30 years old.
personWithArrowFunction.greet(); // Hello, my name is undefined and I am undefined years old.

// Function Declaration
function addNumbers(a, b) {
  return a + b;
}

// eslint-disable-next-line no-console
console.log('Sum:', addNumbers(5, 10)); // Sum: 15

// Arrow Function
const multiplyNumbers = (a, b) => a * b;

// eslint-disable-next-line no-console
console.log('Product:', multiplyNumbers(3, 4)); // Product: 12
