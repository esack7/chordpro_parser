'use strict';
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'), { suffix: 'Prom' });

module.exports = function() {
  return new Promise((resolve, reject) => {
    fs
      .readFileProm(`${__dirname}/../files/because_of_your_love.chopro`)
      .then(song => resolve(song.toString('utf-8')))
      .catch(err => reject(err));
  });
};
