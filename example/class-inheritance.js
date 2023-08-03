/*
  WARNING: In the real project must be have 1 class in the file
*/
// eslint-disable-next-line max-classes-per-file
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  makeSound() {
    // eslint-disable-next-line no-console
    console.log(`${this.name} makes a sound.`);
  }

  // Static method to create a generic animal
  static createGenericAnimal() {
    return new Animal('Generic', 'Unknown');
  }
}

// Subclass: Dog (inherits from Animal)
class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Dog');
    this.breed = breed;
  }

  makeSound() {
    // eslint-disable-next-line no-console
    console.log(`${this.name} barks.`);
  }

  fetch() {
    // eslint-disable-next-line no-console
    console.log(`${this.name} fetches a ball.`);
  }
}

// Subclass: Cat (inherits from Animal)
class Cat extends Animal {
  constructor(name, color) {
    super(name, 'Cat');
    this.color = color;
  }

  makeSound() {
    // eslint-disable-next-line no-console
    console.log(`${this.name} meows.`);
  }

  sleep() {
    // eslint-disable-next-line no-console
    console.log(`${this.name} curls up and takes a nap.`);
  }
}

// Create instances of Dog and Cat
const dog = new Dog('Buddy', 'Golden Retriever');
const cat = new Cat('Whiskers', 'Tabby');

// Call methods on the instances
dog.makeSound(); // Buddy barks.
dog.fetch(); // Buddy fetches a ball.

cat.makeSound(); // Whiskers meows.
cat.sleep(); // Whiskers curls up and takes a nap.

const genericAnimal = Animal.createGenericAnimal();
// eslint-disable-next-line no-console
console.log('Generic Animal:', genericAnimal);
// Generic Animal: Animal { name: 'Generic', species: 'Unknown' }
