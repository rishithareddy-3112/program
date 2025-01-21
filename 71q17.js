const globalSymbol1 = Symbol.for("sharedKey");
const globalSymbol2 = Symbol.for("sharedKey");

console.log(globalSymbol1 === globalSymbol2); 


console.log(Symbol.keyFor(globalSymbol1));
const localSymbol = Symbol("sharedKey");

console.log(localSymbol === globalSymbol1); 
console.log(Symbol.keyFor(localSymbol));    
