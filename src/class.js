// между ними нет никакой разницы
// class declaration
// enumarable - false(methods)
// class - синтаксический сахар

// class Car {}

// class expression
// const Bike = class {};

// function Train(type) {
//   this.type = type;
// }

// const train = Train();
// console.dir(Car);
// console.dir(Train);

//const car = Car();

// --------------------Classes---------------------------
//

class MyArray {
  constructor(...args) {
    this.length = 0;
    for (let i = 0; i < args.length; i++) {
      this.push(args[i]);
    }
  }

  static isMyArray(obj) {
    return obj instanceof MyArray;
  }
  push(...args) {
    if (args) {
      for (let i = 0; i < args.length; i++) {
        this[this.length++] = args[i];
      }
    }
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  }
  forEach(fn) {
    for (let i = 0; i < this.length; i++) {
      fn(this[i], i, this);
    }
  }

  concat(...args) {
    const res = new MyArray();
    this.forEach((el) => res.push(el));
    for (let i = 0; i < args.length; i++) {
      if (Array.isArray(args[i])) {
        res.push(...args[i]);
      } else if (MyArray.isMyArray(args[i])) {
        for (let j = 0; j < args[i].length; j++) {
          res.push(args[i][j]);
        }
      } else {
        res.push(args[i]);
      }
    }
    return res;
  }

  flat(depth = 1) {
    let newMyArray = new MyArray();
    this.forEach((item) => {
      if (MyArray.isMyArray(item) && depth) {
        const tempMyArr = item.flat(depth - 1);
        newMyArray = newMyArray.concat(tempMyArr);
      } else if (item !== undefined) {
        newMyArray.push(item);
      }
    });
    return newMyArray;
  }
}

const myArrArr = new MyArray([2, 3], [4, [5, 6, [7, 8, [9, 10, [11, 12]]]]]);
console.log(myArrArr.concat([5, 7], false, 'str'));
// this - обькт переед точкой
