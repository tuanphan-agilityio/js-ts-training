// Primitives
/* eslint-disable */
const age: number = 25;
const name: string = 'John';
const isStudent: boolean = true;

// Arrays
const numbers: number[] = [1, 2, 3];
const names: string[] = ['Alice', 'Bob', 'Charlie'];

// Any
let dynamicValue: any = 42;
dynamicValue = 'Hello';
dynamicValue = true;

// Functions
function add(a: number, b: number): number {
  return a + b;
}

// Object Types
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: 'Jane',
  age: 30,
};

// Union Types
let id: number | string = 12345;
id = 'ABC123';

// Type Aliases
type Point = {
  x: number;
  y: number;
};

const origin: Point = { x: 0, y: 0 };

// Interfaces
interface Shape {
  color: string;
  radius: number;
}

const shape: Shape = {
  color: 'red',
  radius: 10,
};

// Type Assertions
const someValue: any = 'this is a string';
const strLength: number = (someValue as string).length;

// Literal Types
type Gender = 'male' | 'female';
const userGender: Gender = 'male';

// Enums
enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

const today: Days = Days.Wednesday;
