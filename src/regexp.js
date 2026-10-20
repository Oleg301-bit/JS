'use strict';

let str1 = 'Malong';
let str2 = 'Trolo Trolo TroLolo';

let reg1 = /lo/gims;
let reg2 = new RegExp(str1, 'gi');
let reg3 = new RegExp();

// String

// const arrMatch = str2.match(reg1);
// console.log(arrMatch);

// console.log(str2.search(reg1));
// console.log(str2.search(reg1));
// console.log(str2.split(reg1));
// console.log(str2.replace(reg1, '--'));
// console.log(reg1.test(str2));
console.log(reg1.exec(str2)); // show last index показывает след индекс где начнется проверка
console.log(reg1.exec(str2));
console.log(reg1.exec(str2));
console.dir(reg1);

// g - all text
// i - игнор регистра
// u - полная поддержка юникода
// s - точка будет соответсвовать любому символу
// m - многострочный поиск
// y - конкретная позиция в тексте

//Flags
// ^ - все кроме опредедленных символов
// Symbol groups and metasymbol
let str3 = 'Donic Stiga DHS TSP Bonic';
const reg4 = /[A-Z]/g;
const reg5 = /[^A-Za-z]/g;

// console.log(reg4.test(str3));
// console.log(reg5.test(str3));

// \w - [A-Za-z0-9_]
// \W - [^A-Za-z0-9_]
// \d - [0-9]
// \D - [^0-9]
// \s - ' '
// \S - ^' '
// . - любой символ кроме переноса строки
// \b - word border
// \B - no word border

const str6 = 'Языки обучения: Java, JavaScript, C++';
const reg6 = /\bJava\b/g;

const lanArr = str6.replace(reg6, 'C#');
// console.log(lanArr);

//Modifyers
// + - one or more
// ? - 0 or 1
//* - от нуля до бесконечности
const password = '12_EEOOkk';
function checkPassword(str) {
  const reg = / ^\w{8,15}$/g;
  if (reg.test(str)) {
    return 'Success';
  }
  return 'Error';
}
console.log(checkPassword(password));

const strEmail = 'oleg.mask777@gmail.com';
function checkEmail(str) {
  const reg = /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/gi;
  if (reg.test(str)) {
    return 'Success';
  }
  return 'Error';
}
console.log(checkEmail(strEmail));

//Groups
let htmlImage = '<img src="picture.jpg"/>';

const regHtml = /[a-z]+\.(jpg|png|gif)/i; // группа возможных вариантов

const res = htmlImage.match(regHtml);
console.log(res);

const strData = '2021-09-06';
const dataReg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const res1 = dataReg.exec(strData);
console.log(res1);
console.log(res1.groups.year);
// console.log(res1;
