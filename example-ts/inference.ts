/* eslint-disable */

const list = [0, 1, 3, null, undefined];

interface Animal {
  name: string;
}

class Dog implements Animal {
  name: string;
  speck: () => void;

  constructor(name: string) {
    this.name = name;
    this.speck = () => console.log('Gaw gaw');
  }
}

class Pig implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const DogLu = new Dog('Lulu');
const PigHeo = new Pig('Ut it', 12);

const animals = [DogLu, PigHeo];

animals.forEach((animal) => {
  if (animal instanceof Pig) {
    console.log(animal.age);
  }
});
