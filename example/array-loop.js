// Array
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

// For loop
for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

// eslint-disable-next-line no-console
console.log('Sum using for loop:', sum); // Sum using for loop: 15

// While loop
let i = 0;
let sumWhile = 0;

while (i < numbers.length) {
  sumWhile += numbers[i];
  i += 1;
}

// eslint-disable-next-line no-console
console.log('Sum using while loop:', sumWhile); // Sum using while loop: 15

// Do-While loop
let j = 0;
let sumDoWhile = 0;

do {
  sumDoWhile += numbers[j];
  j += 1;
} while (j < numbers.length);

// eslint-disable-next-line no-console
console.log('Sum using do-while loop:', sumDoWhile); // Sum using do-while loop: 15

// For...of loop
let sumForOf = 0;

/*
  WARNING: Just coding example
  Separately, loops should be avoided in favor of array iterations.
*/
// eslint-disable-next-line no-restricted-syntax
for (const number of numbers) {
  sumForOf += number;
}

// eslint-disable-next-line no-console
console.log('Sum using for...of loop:', sumForOf); // Sum using for...of loop: 15

// Using Array.filter() to find even numbers
const evenNumbers = numbers.filter((number) => number % 2 === 0);
// eslint-disable-next-line no-console
console.log('Even numbers:', evenNumbers); // Even numbers: [2, 4]

// Using Array.find() to find the first even number
const firstEvenNumber = numbers.find((number) => number % 2 === 0);
// eslint-disable-next-line no-console
console.log('First even number:', firstEvenNumber); // First even number: 2

// Using Array.findIndex() to find the index of the first even number
const indexOfFirstEven = numbers.findIndex((number) => number % 2 === 0);
// eslint-disable-next-line no-console
console.log('Index of the first even number:', indexOfFirstEven); // Index of the first even number: 1
