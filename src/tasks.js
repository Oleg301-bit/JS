// const matrix = [
//   [1, 2, 3, 4],
//   [5, 18, 0, 12],
//   [3, 5, 12, 5],
//   [28, 9, 2, 34],
// ];

// // const res = matrix.flat().sort((a, b) => a - b);
// // console.log(res);
// const arraySort = ((a, b) => a - b);
// const result = matrix.map(
//   (array) => array.sort(arraySort)[array.length - 1],
// );
// console.log(result.sort(arraySort));

// class Person {
//   constructor(name = 'Jhon', age = 30, salary = 1000) {
//     this.name = name;
//     this.age = age;
//     this.salary = `${salary}$`;
//   }
// }
// const jhon = new Person();
// const jane = new Person('Jane', 25, 2000);
// const bill = new Person('Bill', 40, 3000);

// const arrayPersons = [jhon, jane, bill];

// const getProps = (arr, prop) => {
//   arr.forEach((person) => console.log(`${person.name} - ${person[prop]}`));
// };
// getProps(arrayPersons, 'salary');

// const str1 = ' Donic Stiga DHS ';

// function removeGap(str1) {
//   const regExp = /\s/gi;
//   return str1.replace(regExp, '');
// }
// console.log(removeGap(str1));
