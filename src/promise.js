'use strict';

import { newRateSpan } from './events.js';
// callback hell
// setTimeout(function () {
//   console.log('Its first callback');
//   setTimeout(function () {
//     console.log('Its second callback');
//     setTimeout(function () {
//       console.log('Its third callback');
//       setTimeout(function () {
//         console.log('Its fourth callback');
//       },2000);
//     },2000);
//   },2000);
// },2000);

// Promise завязаны сами на себе

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('Is done'), 2000);
//   setTimeout(() => reject(new Error('Smth went wrong')), 2000);
// });
// .then((value) => {
//   console.log(value);
//   return value + ' it all';
// })
// .finally(() => console.log('I print this anyway'))
// .then((done) => {
//   console.log(done);
//   newRateSpan.textContent = done;
//   return `${done} add smth else`;
// })
// .then((str) => {
//   console.log(str);
//   return str;
// })
// .catch((error) => {
//   console.log(error.message);
//   newRateSpan.textContent = error.message;
// });

// console.log(promise);
// console.log() - функция синхронного кода
// promise - микротаск
// setTimeout - макротаск
// identity функция - функция которая возвращает полученній аргумент
// thrower функция - функция выбрасывает полученный аргумент как ошибку
// итерабельные обьекты - массивы/set/строка/map

// промисы можно создавать выбрасывая их из функций
// function return promise
// function sum(a, b) {
//   // промифицирована
//   return new Promise((resolve) => {
//     const result = a + b;
//     resolve(result);
//   });
// }
// sum(5, 20)
//   .then((value) => `${value}$`)
//   .then((summ) => console.log(summ));

// promise API
// promise.all

const p1 = Promise.resolve(3);
let p2 = 137;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Stiga'), 1000);
  // setTimeout(resolve, 1000, 'Stiga');
});
// const arrProm = [promise, p1, p2, p3];
// Promise.all(arrProm)
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => { // если промисОЛ словит ошибку скрипт остановится но тем не менее эту ошибку нужно поймать
//     console.log(error);
//     // return error.message;
//   });

// allSettled()
// Promise.allSettled(arrProm)
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// method race()
// Promise.race(arrProm)
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// method any()

// Promise.any(arrProm) // быстрый самый первый и успешный
//   .then((values) => {
//     console.log(values);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async-await

async function asFunc() {
  return 'done';
}
// console.log(asFunc());

//await - нельзя использовать за пределами асинхронной функции
const summ = async (a, b) => {
  try {
    const result = a + b;
    const value = await Promise.resolve(result + '$');
    console.log(value);
    const final = `${value} the end`;
    console.log(final);
    return final;
  } catch (error) {
    console.log(error);
  } finally {
    console.log('All is good anyway');
  }
};

console.log(summ(10, 20));

// Event Loop
/*let i = 0;
let start = Date.now();

function count() {
  for (let j = 0; j < 1e9; j++) {
    i++;
  }
  console.log(i);
  console.log(`it done for ${Date.now() - start} ms`);

}
count()*/

let i = 0;
function showProgress() {
  do {
    i++;
    progress.innerHTML = i;
  } while (i % 1e3 !== 0);

  if (i < 1e5) {
    setTimeout(showProgress)
  }
}

showProgress()
