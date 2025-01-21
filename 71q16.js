// Create unique Symbols with the same description
const symbol1 = Symbol("uniqueProperty");
const symbol2 = Symbol("uniqueProperty");

// Define an object with Symbol properties
const myObject = {
    [symbol1]: "Value for symbol1",
    [symbol2]: "Value for symbol2",
};

// Access the properties using the Symbols
console.log(myObject[symbol1]); // Output: Value for symbol1
console.log(myObject[symbol2]); 
console.log(symbol1 === symbol2); // Output: false
