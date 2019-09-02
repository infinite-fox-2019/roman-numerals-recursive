function toRoman(input) {
  // start your code here
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  const number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

  if (input === 0) {
    return ''
  } else {
    let getRoman = ''
    for (let i = 0; i < number.length; i++) {
      if (input >= number[i]) {
        getRoman = roman[i]
        input -= number[i]
        break
      }
    }

    return getRoman + toRoman(input)
  }

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
