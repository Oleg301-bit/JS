'use strict';
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

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Is done'), 2000);
  setTimeout(() => reject(new Error('Smth went wrong')), 2000);
}).then((value) => value + 'Smth');

console.log(promise);

// identity функция - функция которая возвращает полученній аргумент
// thrower функция - функция выбрасывает полученный аргумент как ошибку
