/* eslint-disable */
class Product {
  private _name: string;
  private _price: number;
  static discountRate: number = 0.1;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  set price(price: number) {
    if (price > 0) {
      this._price = price;
    } else {
      console.log('Price must be greater than 0.');
    }
  }

  protected applyDiscount(): number {
    return this._price * (1 - Product.discountRate);
  }

  displayInfo() {
    console.log(`Product: ${this._name}, Price: ${this._price}`);
  }

  static showDiscountRate() {
    console.log(`Current discount rate: ${Product.discountRate}`);
  }
}

class DiscountedProduct extends Product {
  constructor(name: string, price: number) {
    super(name, price);
  }

  displayInfo() {
    console.log(`Discounted Product: ${this.name}, Price: ${this.applyDiscount()}`);
  }
}

const product = new Product('Widget', 50);
product.displayInfo(); // Product: Widget, Price: 50
product.price = 40;
product.displayInfo(); // Product: Widget, Price: 40

Product.showDiscountRate(); // Current discount rate: 0.1

const discountedProduct = new DiscountedProduct('Special Widget', 50);
discountedProduct.displayInfo(); // Discounted Product: Special Widget, Price: 45
