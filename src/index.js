module.exports = function reverse (n) {
  const str = Math.abs(n).toString();
  const len = str.length - 1;
  let res = '';

  for (i = len; i >= 0; i--) {
      res += str[i];
  }

  return res;
}
