const fs = require('fs');

const demoFile = './exampleFiles/exampleFile1.js';

const pluckFirstLineFromFileCallback = (filepath, callback) => {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      const lines = data.split('\n');
      callback(null, lines[0]);
    }
  });
};

pluckFirstLineFromFileCallback(demoFile, (err, data) => {
  if (err) {
    console.log('err', err);
  } else {
    console.log('success', data);
  }
});