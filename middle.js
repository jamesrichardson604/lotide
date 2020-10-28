const eqArrays = function(middle, expected){  
  if(JSON.stringify(middle) === JSON.stringify(expected)){
    return true
  }else{
    return false
  }
  
}

const assertArraysEqual = function(middle, expected){
  if(eqArrays(middle, expected)){
    console.log(`✅✅✅ ${middle} === ${expected}`);
  }else{
    console.log(`🛑🛑🛑 ${middle} !== ${expected}`);
  }

}

const middle = function(arr){
  let middle = []
  if(arr.length > 2){
  if(arr.length % 2 === 0){
    middle.push(arr[((arr.length / 2) - 1)], arr[(arr.length / 2)])
    }else{
      middle.push(arr[((arr.length - 1) / 2)])
    }
  }
  return middle
}

assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]