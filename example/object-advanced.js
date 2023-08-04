const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA',
  },
};

// Shallow copy using spread syntax
const shallowCopy = { ...person };
const deepCopy = structuredClone(person);

// Destructuring object properties
const {
  firstName,
  age,
  address: { city },
} = person;

// Using rest parameters in an object
const { lastName, ...restInfo } = person;

// Modifying the shallow copy
shallowCopy.firstName = 'Jane';
shallowCopy.address.city = 'Los Angeles';

/* eslint-disable no-console */
console.log('Original Person:', person);
console.log('Shallow Copy:', shallowCopy);
console.log('Deep Copy:', deepCopy);
console.log('Destructured - First Name:', firstName, 'Age:', age, 'City:', city);
console.log('Rest Info:', restInfo);
