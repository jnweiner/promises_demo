const fs = require('fs');
const path = require('path');
const { pluckFirstLine } = require('./promise.js');

const demoDir = './exampleFiles';

const getFilepaths = (dir) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, 'utf8', (err, filepaths) => {
      if (err) {
        reject(err);
      } else {
        resolve(filepaths);
      }
    });
  });
};

const pluckManyFirstLines = (dir) => {
  return new Promise((resolve, reject) => {
    getFilepaths(dir)
      .then((filepaths) => {
        const firstLinePromises = filepaths.map(filepath => {
          const relativePath = path.join(__dirname, dir, filepath);
          return pluckFirstLine(relativePath);
        });
        return Promise.all(firstLinePromises);
      })
      .then((firstLines) => {
        resolve(firstLines);
      })
      .catch((err) => {
        reject(err);
      })
  })
};

pluckManyFirstLines(demoDir)
  .then((data) => {
    console.log('success', data);
  })
  .catch((err) => {
    console.log('err', err)
  });