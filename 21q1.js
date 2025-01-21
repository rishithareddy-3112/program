function greet(name, callback) {
    const message = `Hello, ${name}!`;
    return callback(message);
}
function displayMessage(greeting) {
    return `Greeting received: ${greeting}`;
}
const result = greet("Alice", displayMessage);
console.log(result); 
