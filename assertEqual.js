const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ ' + actual + ' === ' + expected);
  } else {
    console.log('🛑🛑🛑 ' + actual  + ' !== ' + expected);
  }

};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual('Lighthouse Labs', 'Lighthouse Labs');
assertEqual(1, 1);
assertEqual(1, 5);