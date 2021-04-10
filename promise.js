const fs = require('fs');

const pluckFirstLineFromFilePromise = (filepath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');
        resolve(lines[0]);
      }
    });
  });
};

// pluckFirstLineFromFilePromise('./exampleFiles/exampleFile1.js')
//   .then((data) => {
//     console.log('success', data);
//   })
//   .catch((err) => {
//     console.log('err', err);
//   });

module.exports = {
  pluckFirstLine: pluckFirstLineFromFilePromise
}