const eqArrays = function(middle, expected) {
  if (JSON.stringify(middle) === JSON.stringify(expected)) {
    return true;
  } else {
    return false;
  }
  
};

const assertArraysEqual = function(middle, expected) {
  if (eqArrays(middle, expected)) {
    console.log(`✅✅✅ ${middle} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${middle} !== ${expected}`);
  }

};


const letterPositions = function(sentence) {
  const results = {};
  for (let x = 0; x < sentence.length; x++) {
    if (!results[sentence[x]]) {
      results[sentence[x]] = [];
    }
    results[sentence[x]].push(x);
  }
    
  return results;
};

const string = 'hello';

const input = letterPositions(string)

assertArraysEqual(input['l'], [2, 3]);

