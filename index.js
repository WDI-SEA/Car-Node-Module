const Car = require('./Car');

const volksWagen = new Car('grey');
const lexus = new Car('white');

volksWagen.accelerate(25);
lexus.decelerate(15);