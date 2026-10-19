// между ними нет никакой разницы
// class declaration
// enumarable - false(methods)
// class - синтаксический сахар

// class Car {}

// class expression
// const Bike = class {};

// function Train(type) {
//   this.type = type;
// }

// const train = Train();
// console.dir(Car);
// console.dir(Train);

//const car = Car();

// --------------------Classes---------------------------
class Transport {
  constructor(type) {
    this.type = type;
  }
}

class Plain extends Transport {
  constructor(type) {
    super(type);
    // this.type = type;
  }
}
class Ship extends Transport {}
class Train extends Transport {}
class Vechile extends Transport {
  constructor(type) {
    super(type);
    // this.type = type;
  }
  drive() {
    console.log('I am driving');
  }
}
class Car extends Vechile {
  static discount = 0.1;
  #price;
  #priceUnit = '$';

  static isCar(obj) {
    return obj instanceof this;
  }

  static getFullCarTitile(car) {
    return `${car.brand} ${car.model}`;
  }

  constructor(type, brand, model, price, engineVolume) {
    super(type);
    this.brand = brand;
    this.model = model;
    this.#price = price;
    this.engineVolume = engineVolume;
    this._tankVolume = 50;
  }
  get price() {
    return this.#addUnitPrice();
  }
  set price(price) {
    if (price > 0) {
      this.#price = price * (1 - Car.discount);
    }
  }
  #addUnitPrice() {
    return `${this.#price} ${this.#priceUnit}`;
  }

  fillFuel(volume) {
    this._tankVolume += volume;
    return this._tankVolume >= 50
      ? `My ${this.brand} has  ${this._tankVolume} liter of gas`
      : `Tank is full`;
  }
}
const honda = new Car('sedan', 'Honda', 'CRV', 3000, 2.5);
console.log(honda.price);
honda.price = 5000;
console.log(honda.price);

console.log(Car.isCar(honda));

// console.log(typeof Car);
