'use strict';
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), { suffix: 'Prom' });

module.exports = function() {
  return new Promise((resolve, reject) => {
    fs
      .readFileProm(`${__dirname}/../files/be_my_everything.txt`)
      // .readFileProm(`${__dirname}/../files/input.chopro`)
      // .readFileProm(`${__dirname}/../files/output.txt`)
      .then(song => resolve(song.toString('utf-8')))
      .catch(err => reject(console.error(err)));
  });
};
