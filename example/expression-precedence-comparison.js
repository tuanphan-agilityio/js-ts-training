const numberA = 5;
const numberB = 10;
const numberC = 15;

const result = (numberA + numberB * numberC) / (numberC - numberB) + numberA ** 2;
console.log('Result:', result); // 56

const isSumLessThanThird = numberA + numberB < numberC;
const isProductGreaterThanThird = numberA * numberB > numberC;
const isDifferenceEqualToThird = numberA - numberB === numberC;

const rlt = (isSumLessThanThird && isProductGreaterThanThird) || isDifferenceEqualToThird;
console.log('Result:', rlt); // Result: false
