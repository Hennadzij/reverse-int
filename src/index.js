module.exports = function reverse (n) {
    let positiveNum = Math.abs(n)
  return Number(String(positiveNum).split('').reverse().join(''));
}
