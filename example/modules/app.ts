// Import a Single Export from a Module
/* eslint-disable */
import { Animal } from './main';
import type { Point } from './types';
import add from './math';
import * as colors from './colors';

const lion: Animal = { name: 'Leo', species: 'lion' };
console.log(lion); //{ name: 'Leo', species: 'lion' }

const point: Point = { x: 1, y: 2 };

console.log(point);

console.log(add(3, 5));

console.log(colors.red);
