const assertEqual = require('./assertEqual')

const eqArrays = function(arrOne, arrTwo) { 
  assertEqual(JSON.stringify(arrOne), JSON.stringify(arrTwo))
}



module.exports = eqArrays

