// const parseChordPro = require('./lib/parse_chordPro.js');
const createChordPro = require('./lib/create_chordPro.js');
const input = require('./lib/input.js');
const output = require('./lib/output.js');

//Create a chopro file
input().then(song => {
  output(createChordPro(song));
});

//Parse a chopro file to txt
// input().then(song => {
//   output(parseChordPro(song));
// });
