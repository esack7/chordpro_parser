module.exports = function(chordPro) {
  console.log(chordPro);
  console.log('\n');
  let parsed = '';
  let chordArr = chordPro.split('\n');
  chordArr.map(idx => {
    let eachLine = idx.split('');
    let chord = '';
    let text = '';
    let check = true;
    let a;
    let b;
    for(let i = 0; i < eachLine.length; i++) {
      if(eachLine[i] === '[' || eachLine[i] === ']') {
        // console.log(eachLine[i], i);
        check = !check;
        if(eachLine[i] === '[') {
          b = i;
          // console.log('b: ',  b);
        }
        if(eachLine[i] === ']') {
          a = i;
          // console.log('a: ', a);
          i = i + (a - b - 1);
          // console.log('subtract');
        }
      } else if(check) {
        chord = chord + ' ';
      } else {
        chord = chord + eachLine[i];
      }
    }
    check = false;
    for(let j = 0; j < eachLine.length; j++) {
      if(eachLine[j] === '[' || eachLine[j] === ']') {
        check = !check;
      } else if(!check) {
        text = text + eachLine[j];
      }
    }
    // console.log(`${chord} ${chord.length}`);
    // console.log(`${text} ${text.length}`);
    parsed = parsed + chord + '\n' + text + '\n';
  });
  return parsed;
};
