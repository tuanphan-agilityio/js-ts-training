/* eslint-disable */
// Generic function that swaps two elements in an array
function swap<T>(arr: T[], i: number, j: number): void {
  const temp: T = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const numberList: number[] = [1, 2, 3];
swap(numbers, 0, 2);
console.log(numbers); // [3, 2, 1]

const strings: string[] = ['apple', 'banana', 'cherry'];
swap(strings, 1, 2);
console.log(strings); // ["apple", "cherry", "banana"]

// genericClasses.ts

// Generic Queue class
class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
}

const numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
console.log(numberQueue.dequeue()); // 1

const stringQueue = new Queue<string>();
stringQueue.enqueue('hello');
stringQueue.enqueue('world');
console.log(stringQueue.dequeue()); // "hello"

// genericConstraints.ts

// Using generic constraints to ensure the parameter has a 'length' property
function printLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

printLength('Hello'); // 5
printLength([1, 2, 3]); // 3
// The following line will cause a compilation error because numbers don't have a 'length' property
// printLength(42);
