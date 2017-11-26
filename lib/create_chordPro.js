module.exports = function(song) {
  let line = '';
  let longer;
  let regresar = [];
  let arrLines = song.split('\n');
  let test = arrLines[0].split(' ');
  regresar.push(test);
  let test2 = arrLines[1].split('');
  regresar.push(test2);
  if(regresar[0].length >= regresar[1].length) {
    longer = regresar[0].length;
  } else {
    longer = regresar[1].length;
  }
  // console.log(regresar);
  for(let i = 0; i < longer; i++) {
    let a = '';
    if(regresar[0][i]) {
      a = '[' + regresar[0][i] + ']';
    }
    console.log('this is a: ', a);
    let b = '';
    if(regresar[1][i]) {
      b = regresar[1][i];
    }
    console.log('this is b: ', b);
    line = line + a + b;
  }
  line = line + '\n';
  // console.log(song);
  return line;
};
// TODO: figure out why second chord is misplaced
