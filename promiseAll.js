const fs = require('fs');
const path = require('path');
const { pluckFirstLine } = require('./promise.js');

const pluckManyFirstLines = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, 'utf8', (err, files) => {
      if (err) {
        reject(err);
      } else {
        const firstLinePromises = files.map(file => {
          const filepath = path.join(__dirname, dir, file);
          return pluckFirstLine(filepath);
        });
        resolve(Promise.all(firstLinePromises));
      }
    });
  });
};


pluckManyFirstLines('./exampleFiles')
  .then((data) => {
    console.log('success', data);
  })
  .catch((err) => {
    console.log('err', err)
  });
