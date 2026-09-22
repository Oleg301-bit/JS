'use strict';

// // если переменная обьявлена но не иницилизируема то они undefined
// // функция это обьект первого класса

// // Function declaration - можно вызвать до обьявления функции
// function summ(a, b) {
//   // - параметры
//   //console.log(a + b);
//   return a + b;
// }
// console.log(summ(10, 20)); // - аргумерты

// // Function Expression - можно вызвать только после обьявления функции
// const showDivide = function (c, d) {
//   return c / d;
// };
// console.log(showDivide(20, 5));

// // const newFunc = summ;
// // console.log(summ(newFunc));

// // function callBack(c, func) {}

// // console.log(callBack(10, summ));

// check age

let age = 20;
let welcome;

if (age < 18) {
  //   function welcome() { // функция создана в function declaration имеет блочную область видимости
  //     console.log('you are too young');
  //   }
  welcome = function () {
    console.log('you are too young');
  };
  //   welcome();
} else {
  //   function welcome() {
  //     console.log('you are enough old');
  //   }
  welcome = function () {
    console.log('you are too old');
  };
  //   welcome();
}
// welcome();
// параметры - переменные которе передаем в функцию // аргументы - конкретные значения когда мы вызываем эту функцию
// если нужно вывести функцию за пределами блока то лучше использовать function expresion
// arrow function

// const function3 = (par) => { // у стрелочной функции нет своего контекста
//   console.log(par);
//   return par * 2;
// };

// console.log(function3(10));

// change global var as param (пример,нельзя в функции менять глобальные переменные)
// let brand = 'Stiga';
// let ttBlade = 'Donic';

// function changeArg(brand = 'TSP', ttBlade = 'Xiom') { // параметры по умолчанию
//   //   brand = 'butterfly';
//   //   ttBlade = 'DHS';
//   console.log(brand);
//   console.log(ttBlade);
//   return `${brand} + ${ttBlade}`;
// }
// console.log(changeArg());
// console.log(brand, ttBlade);
// почитать - унарный плюс
// почитать - оператор нулевого слияния
function add(a, b) {
  return (a ?? 10) + (b ?? 20);
}
console.log(add(0));

