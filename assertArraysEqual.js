const eqArrays = function(arrOne, arrTwo){  
  if(JSON.stringify(arrOne) === JSON.stringify(arrTwo)){
    return true
  }else{
    return false
  }
  
}

const assertArraysEqual = function(arrOne, arrTwo){
  if(eqArrays(arrOne, arrTwo)){
    console.log(`✅✅✅ ${arrOne} === ${arrTwo}`);
  }else{
    console.log(`🛑🛑🛑 ${arrOne} !== ${arrTwo}`);
  }

}




assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) // => false

