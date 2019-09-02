function toRoman(input) {
  // start your code here
  var arabic = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'LC', 'C', 'CD', 'D', 'DM', 'M'];
  var pengubah = 0;
  var str = '';

  if (input == 0) {
    return '';
  }
  for (var i = arabic.length-1; i >= 0; i--) {
    if (input >= arabic[i]) {
      str += roman[i];
      pengubah += arabic[i];
      break;
    }
  }

  var hasil = str + toRoman(input-pengubah);
  return hasil;
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman
