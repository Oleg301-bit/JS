'use strict';

const arr1 = [10, 20];
const numObj = {
  0: 0,
  1: 1,
  2: 2,
};
const fruits = [
  'apple',
  'orange',
  'pire',
  'peach',
  'pineapple',
  'plump',
  'melon',
  'pineapple',
];
console.log(fruits);
// console.log(numObj);

const arrStr = new Array('Stiga', 'DHS'); // 10 empty elements
console.log(arrStr);

//create
arr1[5] = 50;
//read
console.log(arr1[1]);
// update
arr1[2] = 70;
console.log(arr1);
// delete
// delete fruits[3];
console.log(fruits[3]);
console.log(fruits.at(-3));

// push  - добавляет элемент в конец
// pop - удаляет последний элемент
// shift - удаляет элемент вначале
// unshift  - добавляет элемент в начале

const arrOf = Array.of(10);
console.log(arrOf);
console.log(fruits.concat(arr1, () => {}, {}, NaN));

console.log(arrOf.fill(2));
console.log(arrOf);

const arrMult = [1, [2, 3], [4, 5, [6, 7]]];
console.log(arrMult.flat(2));

console.log(fruits.join('-'));
// console.log(fruits.reverse('-'));

console.log(fruits.includes('apple'));
console.log('-----------------');

const subFruirs = fruits.slice(1);
console.log(subFruirs);

// все функции что передаются в аргумент другим функциям - это callback функции
console.log(fruits.sort()); // регистр для сортировки строк имеет большое значение

const numbArr1 = [12, 11, 23, 34, 55, 66, 77, 111, 2, 3];
console.log(numbArr1.sort((a, b) => a - b)); // сортирока по юниткоду

console.log(fruits.splice(2, 2, 'Blubery'));
console.log(fruits);

console.log(numbArr1.with(2, 500));

// practice
// trim - убирает пробелы в начале и конце
const str1 = 'Montenegro'; // чекнуть за пробел
const str2 = 'Аргентина манит негра';
const sep = ' ';

const reverseLine = (str) => {
  const sep = '';
  const strWithoutGaps = str.toLowerCase().replaceAll(' ', sep);
  console.log(strWithoutGaps);
};
reverseLine(str2);
// const res = str1.split('').reverse().join('');
// console.log(res);
// const resStr = (str, sep) => str.split(sep).reverse().join(sep);
// console.log(resStr(str2, sep));
