const eqArrays = require('./eqArrays');

// const assertArraysEqual = function(actual, expected){
//   console.log('test: ', actual, expected)
//   if(eqArrays(actual, expected)){
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }else{
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }

// }

const assertArraysEqual = function(actual, expected){
  eqArrays(actual, expected)
}

module.exports = assertArraysEqual



