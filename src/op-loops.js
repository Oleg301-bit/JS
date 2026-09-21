'use strict';

// // Operators
// let a = 20;
// let b = 30;

// a += 2;
// a /= 11;
// console.log(a);

// // b++; сначала выолняет операцию, а потом меняет данные
// // b--;

// // ++b;  меняет данные сразу
// // --b;
// console.log(50 - --b);
// console.log(b);
// console.log(50 - --b);
// console.log(b);

// Op && and ||

// let ms = 60;
// let kms = 50;
// let myRate = 55;
// // && - логическое и возвращает первую ложь или последнюю правду
// if (myRate >= kms && myRate < ms) {
//   console.log('I am a kms');
// } else if (myRate >= ms) {
//   console.log(' i am a ms');
// } else {
//   console.log('I am just a sportsman ');
// }
let ms = 60;
let kms = 50;
let myRate = 40;
// || - логическое или (первая правда или последняя ложь)
if (myRate >= kms || myRate >= ms) {
  console.log('I am a kms');
} else if (myRate >= ms) {
  console.log(' i am a ms');
} else {
  console.log('I am just a sportsman ');
}

//let resutl = myRate >= kms || myRate >= ms;
let resutl1 = myRate >= kms && myRate && ms; // логическое и превращает все выражание в правду если все элементы соответсвуют условию ()
// console.log(resutl);
// console.log(resutl1);

// let c = 0;
// console.log(c || 10);
// console.log(c ?? 10); // оператор нулевого слияния работает только на null and undefined

// тернарный оператор (? - if) (: - else)
// let res = myRate >= kms || myRate >= ms ? 'i am a ms' : 'i am just a sportsman';
// console.log(res);

// practice leep year
//let year = Number(prompt('Enter the year please'));
//console.log(year);

// if (Number.isNaN(year)) {

//   console.log('Wrong number!');
// } else if (year % 100 === 0) {
//   if (year % 400 === 0) {
//     console.log('This is a leap year');
//   } else {
//     console.log('This is not a leap year');
//   }
// } else if (year % 4 === 0 && year > 4) {
//   console.log('This is a leap year');
// } else {
//   console.log('this is not a leap year');
// }

// Strangness of isNaN()
// console.log(isNaN('ggffgffg'))

// if (Number.isNaN(year)) {
//   console.log('Wrong number');
// } else {
//   year % 4 === 0 &&
//     (year % 100 !== 0 || year % 400 === 0) &&
//     console.log('this is  a leap year');

//   (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ||
//     console.log('this is not a leap years');
// }

// loops
// while
// let count = 12;

// while (count < 10) {
//   console.log(count);
//   count++;
// }

// // do-while
// do {
//   console.log(count);
//   count--;
// } while (count < 10);

// for
// for (let i = 0; i < 10; i++) {
//   if (i === 5) continue;
//   console.log(`${i * 2}`);
// }

// Multiply table  (метка - идентификатор блока кода)
// outer: for (let i = 1; i < 10; i++) {
//   inner: for (let j = 1; j < 10; j++) {
//     if (i === 5) continue outer;
//     if (j === 5) continue;
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

// Tasksumm until 100
let number = 10;
let resutl = 0;

for (; number <= 100; number++) {
  resutl += number;
}
console.log(resutl);
