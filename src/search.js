'use strict';

function Player(firstName, lastName, foreHand, age, rate, city) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.foreHand = foreHand;
  this.age = age;
  this.rate = rate;
  this.city = city;
}
const maLong = new Player(
  'Ma',
  'Long',
  'Butterfly T19',
  'Donic',
  35,
  40,
  'Dnipro',
);
const xuXin = new Player('Xu', 'Xin', 'Butterfly T05', 'Stiga', 30, 38, 'Kiev');
const kokiNiva = new Player('koki', 'Niva', 'DHS', 'TSP', 25, 35, 'Odessa');

const players = [maLong, xuXin, kokiNiva];

function getProps(limAge) {
  if (this.age > limAge) {
    console.log('You are too old');
  } else {
    for (const key in this) {
      console.log(`${key} = ${this[key]}`);
    }
  }
}
const getPropsWithThis = getProps.bind(maLong,35)
const limAge = 40;
// for ... in - для массивов не использовать!
// обработать call/apply/bind
for (const player of players) {
  getProps.call(player, limAge);
  console.log('====================');
}

getPropsWithThis()
