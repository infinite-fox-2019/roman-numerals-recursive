function toRoman(input) {
  // start your code here
  var roman = [['MM', 3000],['M', 1000],['CM', 900],['D', 500],['CD', 400],['CC', 200],['C', 100],['L', 50],['XL', 40],['X', 10],['IX', 9],['V', 5],['IV', 4],['I', 1]];
  var result = '';
  if (input === 0) {
    return '';
  } else {
    for (var i = 0; i < roman.length; i++) {
      if (input >= roman[i][1]) {
          result += roman[i][0];
          input -= roman[i][1];
          break;
      }
    }
  }
  return result + toRoman(input);
};

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman
