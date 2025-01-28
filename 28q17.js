const symbol = Symbol.for('foo');
const other = Symbol.for('foo');

console.log(symbol === other); 

const symbol3 = Symbol('foo');
const symbol4 = Symbol('foo');

console.log(symbol3 === symbol4);