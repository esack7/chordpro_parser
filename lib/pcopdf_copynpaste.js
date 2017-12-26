module.exports = song => {
  let transformed = '';
  let songArr = song.split('');
  songArr.map(idx => {
    if (idx === '.') {
      transformed += ' ';
    } else {
      transformed += idx;
    }
  });
  return transformed;
};
