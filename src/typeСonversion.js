'use strict';
// явное преобразование

let strNum = '11';

console.log(parseInt(strNum));
console.log(Number(strNum));
console.log(String(strNum));

console.log(Boolean(null));
console.log(NaN ** 0);
// NaN != NaN

// неявное преобразование
console.log(+strNum);
console.log(-strNum);
console.log('258' + 10);

console.log('123' !== 123);
console.log(true + false);
console.log(!!0);
