const eqArrays = function(actual, expected){  
  if(JSON.stringify(actual) === JSON.stringify(expected)){
    return true
  }else{
    return false
  }
  
}

const assertArraysEqual = function(actual, expected){
  if(eqArrays(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }else{
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

}

const flatten = function(arr){
  let newArr = []
  for(let x of arr){
    if(!Array.isArray(x)){
      newArr.push(x)
    }else{
      for(let y of x){
        newArr.push(y)
      }
    }
  }
  return newArr
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]) 

module.exports = flatten