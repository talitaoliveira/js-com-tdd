module.exports = {
  sum: function(num1, num2) {
    return num1 + num2;
  },
  sub: function(num1, num2) {
    return num1 - num2;
  },
  mult: function(num1, num2) {
    return num1 * num2;
  },
  div: function(num1, num2) {
    if(num2 === 0) return 'não é possivel divisão por zero!';
    return num1 / num2;
  }
}
