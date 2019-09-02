function toRoman(input) {
  // start your code here

  let result = ''

  let romanNum = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]


  let rest = input

  if (rest === 0) {
    return ''
  } else {
    for (let i = 0; i < romanNum.length; i++) {
      if (rest >= romanNum[i][0]) {
        result += `${romanNum[i][1]}`
        rest -= romanNum[i][0]
        break;
      }
    }
  }

  return result + toRoman(rest)


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
