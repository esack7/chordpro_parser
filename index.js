// const parseChordPro = require('./lib/parse_chordPro.js');
// const createChordPro = require('./lib/create_chordPro.js');
const fixPcoCnP = require('./lib/pcopdf_copynpaste');
const input = require('./lib/input.js');
const output = require('./lib/output.js');

//Parse a chopro file to txt
// input().then(song => {
//   output(parseChordPro(song));
// });

//Create a chopro file
// input().then(song => {
//   output(createChordPro(song));
// });

//Fix copy/paste from PCO pdf
input().then(song => {
  output(fixPcoCnP(song));
});
