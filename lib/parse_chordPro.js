module.exports = function(chordPro) {
  let parsed = '';
  let chunkArr = chordPro.split('\n\n');
  chunkArr.map(ele => {
    let chordArr = ele.split('\n');
    chordArr.map(idx => {
      let eachLine = idx.split('');
      let chord = '';
      let text = '';
      let check = true;
      let a;
      let b;
      for (let i = 0; i < eachLine.length; i++) {
        if (eachLine[i] === '[' || eachLine[i] === ']') {
          check = !check;
          if (eachLine[i] === '[') {
            b = i;
          }
          if (eachLine[i] === ']') {
            a = i;
            i = i + (a - b - 1);
          }
        } else if (check) {
          chord = chord + ' ';
        } else {
          chord = chord + eachLine[i];
        }
      }
      check = false;
      for (let j = 0; j < eachLine.length; j++) {
        if (eachLine[j] === '[' || eachLine[j] === ']') {
          check = !check;
        } else if (!check) {
          text = text + eachLine[j];
        }
      }
      chord = chord.replace(/\s*$/, '');
      parsed = parsed + chord + '\n' + text + '\n';
    });
  });
  return parsed.trim();
};
