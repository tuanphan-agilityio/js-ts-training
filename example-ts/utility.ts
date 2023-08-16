/* eslint-disable */
type Personal = {
  name: string;
  age: number;
};

type PartialPersonal = Partial<Personal>;

const partialInfo: PartialPersonal = {
  name: "Alice",
};

type Car = {
  brand: string;
  model: string;
  year: number;
};

type CarInfo = Pick<Car, "brand" | "model">;

const car: CarInfo = {
  brand: "Toyota",
  model: "Camry",
};

type Book = {
  title: string;
  author: string;
  pages: number;
};

type BookWithoutAuthor = Omit<Book, "author">;

const book: BookWithoutAuthor = {
  title: "The Hobbit",
  pages: 300,
};

type Movie = {
  title?: string;
  director?: string;
  year?: number;
};

type RequiredMovie = Required<Movie>;

const movie: RequiredMovie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
};

type Student = {
  name: string;
  age: number;
};

type ReadonlyStudent = Readonly<Student>;

const student: ReadonlyStudent = {
  name: "Bob",
  age: 25,
};

// Example usage of utility types
console.log(partialInfo);
console.log(car);
console.log(book);
console.log(movie);
console.log(student);
