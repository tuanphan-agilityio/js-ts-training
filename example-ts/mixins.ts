// Type Constructor
/*eslint-disable*/
class Printable {
  print() {
    console.log(this);
  }
}

// Mixin: Loggable
class Loggable {
  log() {
    console.log('Logged:', this);
  }
}

// Type Constructor
type Constructor = new (...args: any[]) => {};

// Constrained Mixin Function
function Scaleable<TBase extends Constructor>(Base: TBase) {
  return class Scaleable extends Base {
    _scale = 1;

    setScale(scale: number) {
      this._scale = scale;
    }

    get scale(): number {
      return this._scale;
    }
  };
}

// Base class
class ShapeMX {
  constructor(
    public x: number,
    public y: number,
  ) {}
}

// Applying mixins to ShapeMX (using constrained mixin)
const ScaledShapeMX = Scaleable(ShapeMX);

// Using the mixed-in class
const scaledShapeMX = new ScaledShapeMX(10, 20);
console.log(scaledShapeMX);
console.log(scaledShapeMX.scale);

scaledShapeMX.setScale(1.5);
console.log(scaledShapeMX.scale);

// Uncomment the next line to see compilation error
// const unscaledShapeMX = new ShapeMX(30, 40);
// unscaledShapeMX.setScale(1.5); // Error: Property 'setScale' does not exist on type 'ShapeMX'
