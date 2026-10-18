'use strict';

// __proto__  prototype
const animal = {
  type: 'common',
  limbAmount: 4,
  move() {
    console.log('i can move someway');
  },
  eat() {
    console.log('I can eat anything');
  },
};

const mammal = {
  type: 'mammal',
  eat() {
    console.log('I ate milk in my childhood');
  },
};

const cat = {
  name: 'CAT',
  maxWeight: 30,
  maxAge: 20,
  move() {
    console.log('i can run');
  },
};

mammal.__proto__ = animal; // не используется, так просто работает под движком
cat.__proto__ = mammal;

console.log(mammal.limbAmount);
cat.eat();
// cat.type - cat.__proto__mammal__proto__animal__proto__Object

const sonya = Object.create(cat, {
  // напомнить дистрибьютеры
  name: {
    value: 'Sonya',
    enumerable: true,
  },
});

console.log(sonya);

const myArr = [10];
const a = 110;

console.log(myArr.valueOf());
console.log(a.valueOf());
