const _curry = require('lodash/fp/curry');
const _map = require('lodash/fp/map');
const _reduce = require('lodash/fp/reduce');
const _flowRight = require('lodash/fp/flowRight');
const helpers = require('./helpers');


//CURRY
const replace = _curry((what, replacement, string) => string.replace(what, replacement));
const split = _curry((delimeter, string) => string.split(delimeter));
const match = _curry((what, x) => x.match(what));
const filter = _curry((f, xs) => xs.filter(f));
const slice = _curry((start, end, arrary) => arrary.slice(start, end));
const take = slice(0);


// usage
const noVowels = replace(/[aeiou]/ig);
const censor = noVowels('*');
console.log(censor('Chocolate Daddy'));

const splitOnSpace = split(' ');
console.log(splitOnSpace('Space Odyssey'));

const filterQs = filter(match(/q/i));
console.log(filterQs(['Audi', 'quantum', 'q']));

const getFirstTwo = slice(0, 2)
console.log(getFirstTwo([1, 2, 4]));

const takeFive = take(5);
console.log(takeFive('Hello World'));


//REDUCE
const getHighest = _reduce(helpers.keepHighest, -Infinity);
console.log(`Highest is ${getHighest([1, 2, 7, 3, 99])}`);
