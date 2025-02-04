const fs = require('fs');

fs.appendFile('file.txt', 'New text to append.\n', (err) => {
  if (err) {
    console.log('Error appending to file:', err.message);
  } else {
    fs.readFile('file.txt', 'utf8', (err, data) => {
      if (err) {
        console.log('Error reading file:', err.message);
      } else {
        console.log(data);
      }
    });
  }
});
