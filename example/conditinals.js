const score = 85;
let grade;

if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else {
  grade = 'F';
}

// eslint-disable-next-line no-console
console.log('Your grade is:', grade); // Your grade is: B
