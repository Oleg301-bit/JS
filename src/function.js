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

// let age = 20;
// let welcome;

// if (age < 18) {
//   //   function welcome() { // функция создана в function declaration имеет блочную область видимости
//   //     console.log('you are too young');
//   //   }
//   welcome = function () {
//     console.log('you are too young');
//   };
//   //   welcome();
// } else {
//   //   function welcome() {
//   //     console.log('you are enough old');
//   //   }
//   welcome = function () {
//     console.log('you are too old');
//   };
//   welcome();
// }
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
// function add(a, b) {
//   return (a ?? 10) + (b ?? 20);
// }
//console.log(add(0));

// calculator
// const sum = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;

// const calculate = (num1, num2, mathOperation) => {
//   if (Number.isNaN(num1 - num2)) {
//     return 'Enter number please!';
//   }
//   let operation;
//   switch (mathOperation) {
//     case '+': {
//       operation = sum;
//       break;
//     }
//     case '-': {
//       operation = sub;
//       break;
//     }
//     case '*': {
//       operation = mul;
//       break;
//     }
//     case '/': {
//       operation = div;
//       break;
//     }
//     default:
//       console.log('Unknown math operation');
//   }
//   if (typeof operation === 'function') {
//     return operation(num1, num2);
//   } else {
//     return console.log('Unknown math operation');
//   }
// };

// const userInput1 = Number(Number(prompt('Enter please first number')))
//   ? userInput1
//   : console.log('Please enter correct number');
// const userInput2 = Number(prompt('Enter please second number'));
// const mathOperation = prompt('Enter math  operationss');

// const result = calculate(userInput1, userInput2, mathOperation);
// console.log(result);

// clear function  - должна быть детерминорована(при одном и том же наборе аргументов,возвращает один и тот же результат)
// и не создавать побочных эффектов
// (изменения входных значений,вывод информации в консоль,alert,prompt,http request,обращение DOM or BOM, изменения в файловой системе)

// яркий пример нечистой функции
// const noPureFunction = (a, b) => {
//   a = a * Math.random();
//   return a + b;
// };
// console.log(noPureFunction(10, 20));
// изменение глобальной переменной, а это просто ужас для разработчика
// let c = 10;
// const add1 = (d) => (c += d);
// console.log(add1(10));
// console.log(c);

// stack (стэк вызовов - тот кто последний зашел,выходит первый (last in first out) очередь - first in fisrt out)
//debugger
// function greet(person) {
//   console.log(`Hello ${person}`);
// }
// greet('John');
// console.log('Bye - bye');

// maximum
// debugger
// function chicken() {
//   return egg();
// }
// function egg() {
//   return chicken();
// }
// chicken();
// //console.log(object)

// single responsibility

// const showSmth = (str) => {
//   console.log(`${str} smth`);
//   return `${str} smth`;
// };

// //showSmth('Stiga');
// console.log(showSmth('Stiga'));

// функции высшего порядка (возвращает другие функ, принимает в качестве аргумента другие функции или создают внутри себя другие функции)

//Documentation JSDoc
// /**
//  *
//  * @param {number} ballAmount
//  * @param {number} wall
//  * @param {number} diameter
//  * @returns {number} - amount of volumes
//  */
// function getVolumes(ballAmount, wall, diameter) {
//   let result = 0;
//   for (let i = 1; i <= ballAmount; i++) {
//     let innerDiam = diameter + 2 * wall * (i - 2);
//     let volume = (Math.PI * innerDiam ** 3) / 6;
//     result += volume;
//   }
//   return result;
// }
// const volumes = getVolumes(12, 0.01, 0.5);
// console.log(volumes);

// getVolumes()

// не использовать но знать

let constFunction = new Function([]);
