// // const str = 'Donic';
// const timo = {
//   fName: 'Timo',
//   lName: 'Bold',
//   age: 38,
//   brand: 'Donic',
// };
// // const obj = {
// //   rate: 20,
// // };
// const map = new Map(Object.entries(timo));
// // console.log(map);

// const mapEntries = map.entries();
// // console.log(mapEntries);

// const mapArr = Array.from(mapEntries);
// // console.log(mapArr);
// // console.log(Array.from(str));

// // console.log(map.get('lName'));
// // console.log(map.has('lName'));
// // console.log(map.delete('sys'));
// // console.log(map.set('country', 'Germany'));
// // console.log(map.set(timo, 'Rate = 12000'));
// // map[obj] = 40;

// // for (const item of map) {
// //   console.log(item);
// // }
// // console.log(map);

// //groupBy method

// // class Player {
// //   constructor(fName, lName, fHand, bHand, age, rate, city) {
// //     this.fName = fName;
// //     this.lName = lName;
// //     this.fHand = fHand;
// //     this.bHand = bHand;
// //     this.age = age;
// //     this.rate = rate;
// //     this.city = city;
// //   }
// // }

// // const maLong = new Player(
// //   'Ma',
// //   'Long',
// //   'Bteenergy 19',
// //   'Donic',
// //   35,
// //   80,
// //   'Dnipro',
// // );
// // const xuXin = new Player('Xu', 'Xin', 'Bteenergy 05', 'Stiga', 30, 75, 'Kiev');
// // const kokiNiva = new Player('Koki', 'Niva', 'DHS', 'TSP', 45, 90, 'Odessa');
// // const muTay = new Player('Mu', 'Tay', 'DHD', 'THS', 25, 25, 'Zap');

// // let kouLei = {
// //   fName: 'Kou Lei',
// //   age: 30,
// //   rate: 85,
// // };

// // // const players = [maLong, xuXin, kokiNiva, muTay];
// // const players = [
// //   [maLong, 'Butterfly'],
// //   [xuXin, 'DHS'],
// //   [kokiNiva, 'Victas'],
// //   [muTay, 'Donic'],
// //   [kouLei, 'Stiga'],
// // ];
// // const mapWeak = new WeakMap(players);
// // console.log(mapWeak);
// // kouLei = null;
// // console.log(mapWeak);
// // console.log(mapWeak.get(kokiNiva));
// // console.log(mapWeak.get(kouLei));

// // const master = {
// //   master: true,
// // };
// // const canditat = {
// //   master: false,
// // };

// // const result = Map.groupBy(players, ({ rate }) =>
// //   rate < 60 ? canditat : master,
// // );
// // console.log(result);
// // Set

// // const str = 'Donic';
// // const setStr = new Set(str);
// // console.log(setStr);
// // const arr1 = [1, 2, 3, 4, 2, 3, 1, 5, 9, 8, 9];
// // const setNumb = new Set(arr1);

// // setNumb.add(NaN);
// // setNumb.add(true);
// // console.log(setNumb);
// // console.log(setNumb.values());
// // console.log(setNumb.keys());
// // console.log(setNumb.entries());

// // const arrUnic = Array.from(setNumb);
// // console.log(arrUnic);
// // WeakMap - ключи выступают только обьекты,ничего кроме них
// // WeakSet - может хранить только обьекты нельзя вызвать без new

// //Error handler
// // callSomeFunction();

// // const callRealFunc = () => "It's real function";

// // function tryReturn(a, b) {
// //   try {
// //     callRealFunc();
// //     callSomeFunction();
// //     console.log(`Application go on`);
// //     return a + b;
// //   } catch (error) {
// //     console.log(`An error has been happened`);
// //     // console.log(error);
// //     return error;
// //   } finally {
// //     console.log(`this massage will print anyway`);
// //   }
// // }
// // console.log(tryReturn(10, 20));

// // Throw error
// // class User {
// //   constructor(userName, userAge) {
// //     const age = parseInt(userAge);
// //     if (Number.isNaN(age)) throw new TypeError(`Age must be a number!`);
// //     if (age < 0 || age > 150)
// //       throw new RangeError(`Age must be between 0 and 150`);
// //     this.name = userName;
// //     this.age = age;
// //   }
// //   printProps() {
// //     return `Name is ${this.name}, age is ${this.age}`;
// //   }
// // }

// // try {
// //   const jhon = new User('Jhon', 'fggfgfgfgf');
// //   console.log(jhon.printProps());
// // } catch (error) {
// //   console.log(error.name);
// //   console.log(error.message);
// // }
// // || - первая правда либо последняя ложь
// // create own Error object
// class UserError extends Error {
//   constructor(value, options, ...params) {
//     super(...params);
//     this.name = 'UserError';
//     this.argument = value;
//     this.cause = options.cause ?? 'Common error';
//   }
// }
// class User {
//   constructor(userName, userAge) {
//     const age = parseInt(userAge);
//     if (Number.isNaN(age))
//       throw new UserError(
//         userAge,
//         { cause: 'Unexpected value' },
//         `Age must be a number!`,
//       );
//     if (age < 0 || age > 150)
//       throw new UserError(userAge, `Age must be between 0 and 150`);
//     this.name = userName;
//     this.age = age;
//   }
//   printProps() {
//     return `Name is ${this.name}, age is ${this.age}`;
//   }
// }

// try {
//   const bill = new User('Bill', 40);
//   const garry = new User('Garry', 'fgfggfgfgf');
//   console.log(bill.printProps());
//   console.log(garry.printProps());
// } catch (error) {
//   if (error instanceof UserError) {
//     console.log(`Error type User.incorrect value: ${error.argument}`);
//     console.log(`Error case is ${error.cause}`);
//   } else {
//     console.log(error.message);
//   }
// }

// Symbol and iterator
const symb1 = Symbol('UserID'); // символ всегда уникален
const symb2 = Symbol('UserID'); // не записывается в глобальный реестр
console.log(symb1 === symb2);
const symb3 = Symbol.for('UserID'); // с for можно найти по описанию
const symb4 = Symbol.for('UserID');
console.log(symb1 === symb3);
console.log(symb3 === symb4);

console.log(Symbol.keyFor(symb4)); // получаем ключ из глобального реестра

// obj props

const mySuperSecretPassword = Symbol('mySuperSecretPassword');
const myObj = {
  fName: 'Bill',
};

myObj.myPassword = 'password';
myObj[mySuperSecretPassword] = 'iuqewuiewiueiueqw'; // символьные ключи нельзя увидеть перебором например for _ in

for (let key in myObj) {
  console.log(`${key} = ${myObj[key]}`);
}
console.log(Object.keys(myObj)); // показывает массив ключей нашего обьекта
console.log(Object.getOwnPropertyNames(myObj));
console.log(myObj[mySuperSecretPassword]); // только так можно увидеть что находится внутри при символьном создании

// протокол иитератор
// обьекты не итерируемые!
// iterator
const user = {
  fName: 'John',
  lName: 'Doe',
  age: 30,
  email: 'j-dogn777@gmail.com',
  phone: '+380(066)-864-22-99',
};
function iterFunction() {
  const arrEntries = Object.entries(this);
  let current = 0;
  let last = arrEntries.length;
  return {
    next() {
      if (current < last) {
        return {
          done: false,
          value: arrEntries[current++],
        };
      }
      return {
        done: true,
      };
    },
  };
}
user[Symbol.iterator] = iterFunction;
const props = [...user];
console.log(props);



