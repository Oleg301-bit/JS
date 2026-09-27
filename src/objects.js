'use strict';

// // const user = {
// //   firstName: 'John', //свойства ключ:значение
// //   lastName: 'Doe',
// //   age: 20,
// //   login: 'j_d',
// //   email: 'dor@gmail.com',
// //   isMarried: true,
// //   1: 1,
// //   2: 2,
// //   'home address': 'Dnipro',
// // };
// // console.log(user);

// // // непопулярный метод создания обьекта
// // const person = new Object(user);

// // // const arr = new Object(Array()); // array - обьект
// // // console.log(arr);

// // console.log(person);

// // console.log(person === user);

// // CRUD
// // create
// // read
// // update
// // delete

// // console.log((user.firstName = 'Oleg'));

// // user.phone = '+380 050 696 54 74';
// // console.log(user);

// // delete user[2]; // через точечьную нотацию к цифрам не добраться (массивы - это обьекты)
// // console.log(user);

// // user['home address'] = 'Kiev';
// // console.log(user);

// // let title;
// // const sportsmen = {
// //   [title]: 'MS',
// // };
// // console.log(sportsmen);

// // function setTitle(rate) {
// //   let title;
// //   let address = 'Ukraine';

// //   if (rate >= 60) {
// //     title = 'MS';
// //   } else if (rate >= 40 && rate < 60) {
// //     title = 'KMS';
// //   } else {
// //     title = 'ordinary sportsmen';
// //   }
// //   const sportsmen = {
// //     [title]: title,
// //     address: address,
// //   };
// //   return sportsmen;
// // }

// // console.log(setTitle(100));

// // const user = {
// //   name: 'Oleg',
// //   //   say: function () {
// //   //     return 'Hello everybody';
// //   //   },
// //   //   say() {
// //   //     return 'Hello everybody';
// //   //   },
// // };

// // user.say = function () {
// //   return 'Hello everybody';
// // };
// // console.log(user.say());

// // Car
let color = 'green';
const car = {
  brand: 'BMW',
  model: 'M4',
  'year realise': 2004,
  transmition: 'mechanic',
  isWell: true,
  color,
  run(driver) {
    return `This car is running ${driver} on ${this.brand} ${this.model}`;
  },
  go: (driver) => {
    return `This car is running ${driver} on ${this.brand} ${this.model}`; // в стрелочных функциях нет this=undefined
  },
};
// // console.log(car);
console.log(car.run('John'));
console.log(car.go('John'));
// // console.log('color' in car); // проверка есть ли свойство в обьекте или нет
// console.log('====================================================');
// // синтаксический сахар - возможность что-либо упростить
// // for ... in
// // for (let key in car) {
// //   if (typeof car[key] !== 'function') {
// //     console.log(`key ${key} = ${car[key]}`);
// //   }
// // }
// const car2 = {
//   brand: 'BMW',
//   model: 'M4',
//   'year realise': 2004,
//   transmition: 'mechanic',
//   isWell: true,
//   color,
//   run(driver) {
//     return `This car is running ${driver}`;
//   },
// };
// // проработать копирование обьектов
// let a = 10;
// let b = 10;
// console.log(a === b);

// const car3 = car;

// console.log(car === car2);
// console.log(car === car3);
// console.log(car3);
// console.log('=========================');
// console.log(car);
// console.log('=========================');
// console.log(car2);
// //console.log(car2);
// // копирование по значению(примитивы) и копирование по ссылке(копируется ссылка в области памяти)
// const emptyObject = {};
// function checkEmpty(obj) {
//   // почитать за for .. in
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// console.log(checkEmpty(emptyObject));

// console.log(Object.keys(car));
// // что такое this

//This

const desktop = {
  brand: 'Intel',
};
const laptop = {
  brand: 'Dell',
};

function showBrand() {
  return this.brand;
}

function func() {
  return this;
}

const arrowFunc = () => {
  // берет родительский контекст у нее своего нет
  return this;
};
// laptop.show = arrowFunc;
// desktop.show = func;

// console.log(laptop.show());
// console.log(desktop.show());
// console.log(func());
// console.log(arrowFunc());

// что такое this - это обьект перед точкой при вызове метода (контекст выполнения функции)
laptop.show = showBrand;
desktop.show = showBrand;

console.log(laptop.show());
console.log(desktop.show.apply(car, ['a', 'b']));
// дополнительгые параметры apply должны передаваться в масиве
// закишировать
const bindShow = laptop.show.bind(car, true, false); // возвращает новую функцию с новым контекстом
console.log(typeof bindShow);
console.log(bindShow());
// apply/bind - не использовать со стрелачными функциями

// конструктор - function

function Car(brand, model, transmition, color) {
  this.brand = brand;
  this.model = model;
  this.transmition = transmition;
  this.color = color;
  this.run = function () {
    return `This car is running on ${this.brand} ${this.model}`;
  };
}

const bmw = new Car('BMW', 'M4', 'Auto', 'Blue');
console.log(bmw);

const arr = [];
console.log(Array.isArray(bmw));

// что такое примитивное значение

const price = {
  tea: 20,
  coffee: 30,
  meal: 50,
  onion: 10,
  waiter: 'Jhon Doe',
  isPaid: false,
};
for (let key in price) {
  console.log(`${key} : ${price[key]}`);
}
console.log('=======================================');

function multPrice(bill) {
  for (let key in bill) {
    if (typeof bill[key] === 'number') {
      bill[key] *= 2;
    }
  }
}
multPrice(price);
for (let key in price) {
  console.log(`${key} : ${price[key]}`);
}
