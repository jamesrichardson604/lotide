const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }

};

const findKeyByValue = function(genre, show) {
  for (let x in genre) {
    if (genre[x] === show) {
      return x;
    }
    
  }
  return undefined;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};




assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);