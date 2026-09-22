'use strict';

// если переменная обьявлена но не иницилизируема то они undefined
// функция это обьект первого класса

// Function declaration - можно вызвать до обьявления функции
function summ(a, b) {
  // - параметры
  //console.log(a + b);
  return a + b;
}
console.log(summ(10, 20)); // - аргумерты

// Function Expression - можно вызвать только после обьявления функции
const showDivide = function (c, d) {
  return c / d;
};
console.log(showDivide(20, 5));

// const newFunc = summ;
// console.log(summ(newFunc));
