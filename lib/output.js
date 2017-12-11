'use strict';
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), { suffix: 'Prom' });

module.exports = function(song) {
  return new Promise((resolve, reject) => {
    fs
      // .writeFileProm(`${__dirname}/../files/output.txt`, song)
      .writeFileProm(`${__dirname}/../files/output.chopro`, song)
      .then(() => {
        resolve(console.log('The file has been written.'));
      })
      .catch(reject);
  });
};
