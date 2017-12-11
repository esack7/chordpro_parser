const parseChordPro = require('./lib/parse_chordPro.js');
// const createChordPro = require('./lib/create_chordPro.js');
const input = require('./lib/input.js');
// createChordPro(input())
// parseChordPro(input());
input().then(song => {
  console.log(parseChordPro(song));
});
