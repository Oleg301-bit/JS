'use strict';

// // // __proto__  prototype
// // const animal = {
// //   type: 'common',
// //   limbAmount: 4,
// //   move() {
// //     console.log('i can move someway');
// //   },
// //   eat() {
// //     console.log('I can eat anything');
// //   },
// // };

// // const mammal = {
// //   type: 'mammal',
// //   eat() {
// //     console.log('I ate milk in my childhood');
// //   },
// // };

// // const cat = {
// //   name: 'CAT',
// //   maxWeight: 30,
// //   maxAge: 20,
// //   move() {
// //     console.log('i can run');
// //   },
// // };

// // mammal.__proto__ = animal; // не используется, так просто работает под движком
// // cat.__proto__ = mammal;

// // console.log(mammal.limbAmount);
// // cat.eat();
// // // cat.type - cat.__proto__mammal__proto__animal__proto__Object

// // const sonya = Object.create(cat, {
// //   // напомнить дистрибьютеры
// //   name: {
// //     value: 'Sonya',
// //     enumerable: true,
// //   },
// // });

// // console.log(sonya);

// // const myArr = [10];
// // const a = 110;

// // console.log(myArr.valueOf());
// // console.log(a.valueOf());

// // function Country(title = 'Ukraine', capital = 'Kiev') {
// //   this.title = title;
// //   this.capital = capital;
// //   // this.getInfo = function () {
// //   //   return `Capital is ${this.capital}`;
// //   // };
// // }
// // Country.prototype.getInfo = function () {
// //   return `Capital is ${this.capital}`;
// // };

// // const ukraine = new Country();
// // const usa = new Country('USA', 'Washigton');

// // console.log(ukraine.getInfo());
// // console.log(usa.getInfo());
// // console.log(ukraine.getInfo === usa.getInfo);
// // console.log(ukraine);

// // console.log(usa instanceof Country); // read about this later

// // arguments-spread-rest
// function someFunc(a) {
//   return arguments; // встроенное свойство JS - собирает все аргумент которые передаются, не только которые ожидаются,но и те что нет
// }

// const funcExp = function (a) {
//   // arguments.forEach(); // нельзя работать  методами массива
//   // const arr = Array.from(arguments);
//   // arr.forEach((el) => console.log(el));
//   return arguments;
// };

// const arrowFunc = (a, ...args) => args; // нету своего this и не нету своего arguments и нет свойства prototype и нет свойства super

// console.dir(someFunc);
// console.dir(funcExp);
// console.dir(arrowFunc);
// console.log('------------------');
// console.log(someFunc(1, 5, true, {}));
// console.log(funcExp(1, 5, true, {}));
// console.log(arrowFunc(1, 5, true, {}));
// // console.log(arrowFunc(1, 5, true, {}));
// // rest - собирает все аргменты (внутри параметров функции)
// //spread - раздает или же раскрывает массив работают только на иттерируемых обьектах
// // итерируемый обьект - почитать!
// значение элементов возращают только те методы что их удаляют
// push возвращает обновленную длину массива
function MyArray(...args) {
  this.length = 0;
  // this.push = function (item) {
  //   this[this.length] = item;
  //   return ++this.length;
  // };
  for (let i = 0; i < args.length; i++) {
    this.push(args[i]);
  }
}

MyArray.isMyArray = function (obj) {
  return obj instanceof MyArray;
};

MyArray.prototype = new MyArrProto();

const myArr = new MyArray(10);
const myArr1 = new MyArray(100, 500, 700, 900, 1000);

const arr = [20, 30];
const arr1 = [];

console.log(arr.push === arr1.push);
console.log(myArr.push === myArr1.push);

console.log(myArr1.pop());
console.dir(MyArray);
console.log(MyArray.isMyArray(arr));

function MyArrProto() {
  this.push = function () {
    if (arguments) {
      for (let i = 0; i < arguments.length; i++) {
        this[this.length++] = arguments[i];
      }
    }
  };
  this.pop = function () {
    if (this.length === 0) {
      return; // просто return возвращает undefined
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };
  this.forEach = function (fn) {
    for (let i = 0; i < this.length; i++) {
      fn(this[i], i, this);
    }
  };
  this.some = function (fn) {
    for (let i = 0; i < this.length; i++) {
      if (fn(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
  this.every = function (fn) {
    for (let i = 0; i < this.length; i++) {
      if (!fn(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
  this.map = function (fn) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(fn(this[i], i, this));
    }
    return result;
  };
  this.concat = function (...args) {
    const res = new MyArray();
    for (let i = 0; i < args.length; i++) {
      if (Array.isArray(args[i])) {
        res.push(...args[i]);
      } else if (MyArray.isMyArray(args[i])) {
        for (let j = 0; j < args[i].length; j++) {
          res.push(args[i][j]);
        }
      } else {
        res.push(args[i]);
      }
    }
    return res;
  };

  this.reverse = function () {
    const lengthMinusOne = this.length - 1;
    let temp;
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      // temp = this[i];
      // this[i] = this[lengthMinusOne - i];
      // this[lengthMinusOne - i] = temp;
      [this[i], this[lengthMinusOne - 1]] = [this[lengthMinusOne - 1], this[i]];
    }
    return this;
  };
}
// деструктуризация

let a = 10;
let b = 100;
[a, b] = [b, a];

console.log(a);
console.log(b);

const person = ['Oleg', 'Doe'];
// let fName = person[0];
// let lName = person[1];

let [fName, lName] = person;
console.log(fName);
console.log(lName);

// distructure  array
const info = {};
const countryArr = ['Ukraine', 'Kiev', 1000, 200];

const [country, capital, ...args] = countryArr;
[info.country, info.capital, , info.area] = countryArr;

// console.log(country);
// console.log(capital);
// console.log(...args);
console.log(info);

// distructure  object
info.region = ['Dnipro', 'Zapp', 'Odessa'];
let {
  country: count,
  capital: cap,
  area,
  region: [dnipro, zapp, odessa],
} = info; // сначала что/ потом куда сохранить
console.log(count);
console.log(cap);
console.log(area);
console.log(dnipro, zapp, odessa);
