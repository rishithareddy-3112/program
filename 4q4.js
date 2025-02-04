const EventEmitter = require('events');
const e = new EventEmitter();

e.once('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

e.emit('greet', 'Alice');
e.emit('greet', 'Bob');  // No output since listener removed itself after first call
