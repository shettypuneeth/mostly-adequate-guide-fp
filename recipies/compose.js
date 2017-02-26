const _map = require('lodash/fp/map');
const _reduce = require('lodash/fp/reduce');
const _flowRight = require('lodash/fp/flowRight');
const _filter = require('lodash/fp/filter');
const _ = require('lodash/fp');

const helpers = require('./helpers');


//COMPOSE
const square = (x) => x * x;
const increment = (x) => x + 1;
const concoction = _flowRight(square, increment);

const aboveTen = _filter((x) => x > 10);
const doubble = _map(x => x * 2);
const doubbleAboveTen = _flowRight(doubble, aboveTen)

const head = x => x[0];
const toUpperCase = x => x.toUpperCase();
const toLowerCase = x => x.toLowerCase();
const splitOnSpace = helpers.split(' ');
const joinWithDot = helpers.join('. ');
const getInitials = _flowRight(joinWithDot, _map(_flowRight(toUpperCase, head)), splitOnSpace);

//usage
console.log([1, 2].map(concoction));
console.log(doubbleAboveTen([1, 10, 11, 12]));
console.log(getInitials('Tony Rocky Horror'));

//EXERCISE
const CARS = [{
  name: 'Ferrari FF',
  horsepower: 660,
  dollar_value: 700000,
  in_stock: true,
}, {
  name: 'Spyker C12 Zagato',
  horsepower: 650,
  dollar_value: 648000,
  in_stock: false,
}, {
  name: 'Jaguar XKR-S',
  horsepower: 550,
  dollar_value: 132000,
  in_stock: false,
}, {
  name: 'Audi R8',
  horsepower: 525,
  dollar_value: 114200,
  in_stock: false,
}, {
  name: 'Aston Martin One-77',
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true,
}, {
  name: 'Pagani Huayra',
  horsepower: 700,
  dollar_value: 1300000,
  in_stock: false,
}];

const isLastInStock = _flowRight(_.path('in_stock'), _.last);
console.log('Is last car in stock?', isLastInStock(CARS));

const nameOfFirstCar = _flowRight(_.path('name'), _.head);
console.log('First car is:', nameOfFirstCar(CARS));

const averageDollarValue = _flowRight(helpers.average, _map(_.path('dollar_value')));
console.log('Average dollar value is:', averageDollarValue(CARS));

const replaceWithUnderScore = _.replace(/\W+/g, '_');
const sanitizeNames = _map(_flowRight(replaceWithUnderScore, toLowerCase, _.path('name')));
console.log('Sanitized:', sanitizeNames(CARS));

const formatPrice = _flowRight((x) => `$${x}`, _.path('dollar_value'));
const availablePrices = _flowRight(_.join(', '), _map(formatPrice), _filter(_.path('in_stock')));
console.log('Available prices:', availablePrices(CARS));

const append = _.curry((append, string) => `${string}${append}`);
const getFastestCar = _flowRight(append(' is the fastest car.'), _.path('name'), _.last, _.sortBy(_.path('horsepower')));
console.log(getFastestCar(CARS));
