/* eslint-disable no-console */
// Function Declaration
function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

// Function Expression
// eslint-disable-next-line func-names
const reverse = function (name) {
  return name.split('').reverse().join('');
};

// Arrow Function
const addGreeting = (name) => `Hello, ${name}`;

// Callback Function
function processNames(names, callback) {
  return names.map(callback);
}

// Array of names
const names = ['alice', 'bob', 'charlie'];

// Using the functions with a callback
const capitalizedNames = processNames(names, capitalize);
const reversedNames = processNames(names, reverse);
const greetedNames = processNames(names, addGreeting);

console.log('Capitalized Names:', capitalizedNames);
console.log('Reversed Names:', reversedNames);
console.log('Greeted Names:', greetedNames);
