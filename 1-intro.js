const amount = 12;

if (amount < 10) {
  console.log('Small number');
} else {
  console.log('Big number');
}

console.log(`hello this is my first node application`);

// GLOBALS - NO WINDOW

// __dirname  - path to curent directory
// __filename - file name
// require    - function to use modules (CommonJs)
// module     - info about curent module (file)
// process    - info about env where the program is being executed *

console.log(__dirname);

// require

const name = require('./2-names');
const sayHi = require('./3-utils');
const data = require('./4-alternate-flawer');
console.log(data);
sayHi(name.sobash);
sayHi(name.vj);
