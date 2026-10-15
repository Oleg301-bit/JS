'use strict';

const arr1 = [1, 2, 3, 11];
//console.log(arr1);

// arr1.forEach((el, i, arr1) => {
//   arr1[i] = el * 5;
// });
// console.log(arr1);

// Own implementation of forEach - ничего не возвращает, возврат forEach - undefined
function myForEach(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i++) {
    callback.call(thisArg, arr[i], i, arr);
  }
}
myForEach(arr1, (el) => {
  console.log(el);
});

// Find - чистая фунция
const arr2 = ['Donic', 'Stiga', 'DHS', 'Xiom', 'TSP'];
console.log(arr2.findIndex((el) => el === 'DHS'));
console.log('===========');
console.log(arr1.find((el) => el % 2 === 0));

// чистая функция не меняет входные параметры,не выполняет побочных эффектов (не изменят входные параметры,вывод в консоль,браузер, изменение файловой системой)
// map - clean function

const strIntArr = ['1', '5', '6'];
const parseToInt = (item) => parseInt(item);
// const intArr = strIntArr.map(parseToInt);
// console.log(intArr);

// own implement of map

function myMap(arr, callback, thisArg) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback.apply(thisArg, [arr[i]], i, arr));
  }
  return result;
}

console.log(myMap(strIntArr, parseToInt));

// some - every
const arr3 = [2, 3, 4, 5, 6, 7, 8, 9, 90];

console.log(arr3.some((el) => el % 2 === 1));
console.log(arr3.every((el) => el % 2 === 1));

// Own some()

const mySome = (arr, callback, thisArg) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};
console.log(mySome(arr3, (el) => el % 2 === 1));

const myEvery = (arr, callback, thisArg) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};
console.log(myEvery(arr3, (el) => el % 2 === 1));

// filter
const arr4 = [2, 3, 45, 6];
const arr5 = ['donic', 'dhs', 'tsp'];

const doe = {
  name: 'John Doe',
  role: 'moderator',
};

const smith = {
  name: 'Jane Smith',
  role: 'admin',
};

const person = [doe, smith];

console.log(arr4.filter((el) => el > 3));
console.log(arr5.filter((el) => el[0] === 'd'));
console.log(person.filter((el) => el.role === 'admin'));

function myFilter(arr, callback, thisArg) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
//  reduce and reduceRight
// pseudocode
/*
   array.reduce(callback,[initialValue]);
   callback(accum,currentValue,[index,array])
   if (initialValue) {
   accum = initialValue;
   currentValue = array[0]
   } else {
    accum = array[0];
    currentValue = array[0]  
    }
*/
const emptyArray = [];
console.log(emptyArray.reduce((a, b) => a + b, 10));

const friends = [
  { name: 'Ann', books: ['HP', 'Python'], age: 20 },
  { name: 'Jhon', books: ['JS', 'Hibernate'], age: 25 },
  { name: 'Bill', books: ['Java', 'SQL'], age: 30 },
];

const allBooks = friends.reduce((prev, curr) => [...prev, ...curr.books], []); // spred / rest operators
console.log(allBooks);

// own  reduce
const myReduce = (arr, callback, startValue) => {
  let result;
  if (startValue) {
    result = startValue;
    for (let i = 0; i < arr.length; i++) {
      result = callback(result, arr[i], i, arr);
    }
  } else {
    result = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      result = callback(result, arr[i + 1], i, arr);
    }
  }
  return result;
};
const arrArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(myReduce(arrArr, (a, b) => a.concat(b)));
