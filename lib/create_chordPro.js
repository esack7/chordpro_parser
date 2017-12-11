module.exports = function(song) {
  let line = '';
  let arrBlock = song.split('\n\n');
  arrBlock.map(ele => {
    let arrLines = ele.split('\n');
    line = line + arrLines[0] + '\n';
    for (let i = 2; i < arrLines.length; i += 2) {
      let chords = [];
      let longer;
      let regresar = [];
      let chordSplit = arrLines[i - 1].split(' ');
      chordSplit.map(idx => {
        if (idx.length) {
          let repeat = idx.length;
          chords.push(idx);
          for (let k = 0; k < repeat; k++) {
            chords.push('');
          }
        } else {
          chords.push(idx);
        }
      });
      regresar.push(chords);
      let lyrics = arrLines[i].split('');
      regresar.push(lyrics);
      if (regresar[0].length >= regresar[1].length) {
        longer = regresar[0].length;
      } else {
        longer = regresar[1].length;
      }
      for (let j = 0; j < longer; j++) {
        let a = '';
        if (regresar[0][j]) {
          a = '[' + regresar[0][j] + ']';
        }
        let b = '';
        if (regresar[1][j]) {
          b = regresar[1][j];
        }
        line = line + a + b;
      }
      line = line + '\n';
    }
    line = line + '\n';
  });
  return line.trim();
};
