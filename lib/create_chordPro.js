module.exports = function(song) {
  let line = '';
  let arrLines = song.split('\n');
  // console.log(arrLines);
  for(let i = 1; i < arrLines.length; i+=2) {
    let longer;
    let regresar = [];
    // console.log(arrLines[i]);
    let chords = arrLines[i - 1].split(' ');
    // console.log(chords);
    for (let k = 0; k < chords.length; k++) {
      if(chords[k].length) {
        console.log('this should have length: ', chords[k]);
      }
    }
    regresar.push(chords);
    let lyrics = arrLines[i].split('');
    regresar.push(lyrics);
    if(regresar[0].length >= regresar[1].length) {
      longer = regresar[0].length;
    } else {
      longer = regresar[1].length;
    }
    for(let j = 0; j < longer; j++) {
      let a = '';
      if(regresar[0][j]) {
        a = '[' + regresar[0][j] + ']';
        // console.log('this is a length: ', a.length - 2);
        // if(a.length - 2 > 0) {
        //   for(let k = 0; k < a.length; k++) {
        //     a += ' ';
        //   }
        // }
      }
      let b = '';
      if(regresar[1][j]) {
        b = regresar[1][j];
      }
      line = line + a + b;
    }
    line = line + '\n';
  }
  return line;
};
// TODO: figure out why second chord is misplaced
