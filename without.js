// const eqArrays = function(arrOne, arrTwo){  
//   if(JSON.stringify(arrOne) === JSON.stringify(arrTwo)){
//     return true
//   }else{
//     return false
//   }
  
// }

// const assertArraysEqual = function(arrOne, arrTwo){
//   if(eqArrays(arrOne, arrTwo)){
//     console.log(`✅✅✅ ${arrOne} === ${arrTwo}`);
//   }else{
//     console.log(`🛑🛑🛑 ${arrOne} !== ${arrTwo}`);
//   }

// }

const without = function(source, itemsToRemove){
    let newArray = []
    for(let x of source){
      if(!itemsToRemove.includes(x)){
        newArray.push(x)
      }
    }
   
    console.log(newArray)
  
  }
  
  


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]