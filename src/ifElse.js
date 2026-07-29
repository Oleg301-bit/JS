'use strict';

let cret = 1000;
let rating = 1100;

// if (rating > cret) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

//SWITCH
// let variant = 0;
// let result = typeof variant;

// switch (result) {
//   case 'string':
//     console.log(`${variant} is a strings`);
//     break;
//   case 'number':
//     console.log(`${variant} is a number`);
//     break;
//   case 'boolean':
//     console.log(`${variant} is a boolean`);
//     break;
//   default:
//     console.log('ooooooooooops');
// }

// Switch with multiply case
let creature = 'dragon';

switch (creature) {
  case 'sparrow':
  case 'hawk':
  case 'falcon':
  case 'eagle':
  case 'owl':
    console.log(`${creature} this is a bird`);
    break;
  case 'salmon':
  case 'pike':
  case 'carp':
  case 'crucian':
  case 'shark':
  case 'tuna':
    console.log(`${creature} this is a fish`);
    break;
  case 'dog':
  case 'cat':
  case 'whale':
  case 'horse':
  case 'human':
    console.log(`${creature} this is a mammalia`);
    break;
  default:
    console.log(`${creature} this animal isn't from my list( `);
}
// виды операторов и их приоритеты!

