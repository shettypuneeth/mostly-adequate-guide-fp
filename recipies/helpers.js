const _curry = require('lodash/fp/curry');
const _map = require('lodash/fp/map');
const _reduce = require('lodash/fp/reduce');
const _flowRight = require('lodash/fp/flowRight');
const _ = require('lodash/fp');

//HELPERS
const keepHighest = (x, y) => x > y ? x : y;

const trace = _curry((tag, x) => { console.log(tag, x); return x; });
const split = _curry((delimeter, string) => string.split(delimeter));
const join = _curry((connector, array) => array.join(connector));

const average = (xs) => _.sum(xs) / xs.length;


module.exports = {
  average,
  keepHighest,
  trace,
  split,
  join
};
