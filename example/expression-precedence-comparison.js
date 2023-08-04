const numberA = 5;
const numberB = 10;
const numberC = 15;

const result = (numberA + numberB * numberC) / (numberC - numberB) + numberA ** 2;
// eslint-disable-next-line no-console
console.log('Result:', result); // 56

const isSumLessThanThird = numberA + numberB < numberC;
const isProductGreaterThanThird = numberA * numberB > numberC;
const isDifferenceEqualToThird = numberA - numberB === numberC;

const value = (isSumLessThanThird && isProductGreaterThanThird) || isDifferenceEqualToThird;
// eslint-disable-next-line no-console
console.log('Result:', value); // Result: false
