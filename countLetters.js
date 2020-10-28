const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }

};

const countLetters = function(string){
  string = string.replace(' ', '')
  let numLetters = {}
  for(let x of string){
    if(numLetters[x]){
      numLetters[x] += 1
    }else{
      numLetters[x] = 1
    }
      
    
    
  }
  return numLetters

}

const string = 'hello world'

const input = countLetters(string)

assertEqual(input['h'], 1)


