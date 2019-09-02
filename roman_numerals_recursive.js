function toRoman(input) {
  // start your code here
  if (input ==0){
    return ''
  }

  if (input > 3000 || input < 1){
    return 'input number between 1 to 3000'
  }

  var romanNumeral = {
    MMM: 3000,
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    CCC: 300,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    XXX: 30,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    III: 3,
    I: 1
  }
  var romanArr = Object.keys(romanNumeral)

  var result = ''

  for(i=0 ; i<romanArr.length ; i++){
    if(input >= romanNumeral[romanArr[i]]){
      input -= romanNumeral[romanArr[i]]
      return romanArr[i] + toRoman(input)
    }
  }
  // return result

  // return to_roman(input);
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

// module.exports = toRoman
