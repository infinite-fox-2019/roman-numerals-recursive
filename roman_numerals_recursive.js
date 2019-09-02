function toRoman (num) {
  if (num == 0){
    return ''
  }
  var roman = {
    M : 1000,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I : 1
  };
  var str = '';
  for (var key in roman){
    if (num >= roman[key]){
      str += key
      num -= roman[key]
      break;
    }
  }
  return str + toRoman(num);
}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('13    | XIII     | ', toRoman(13))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))










// function toRoman(input) {
//   var str = '';
//   var numStr = String(input);
//   if (input == 0){
//     return '';
//   } else {
//     if (input >= 1000){
//       str += 'M'
//       return str + toRoman(numStr.slice(1));
//     } else if(input >= 500){
//       str += 'D'
//       return str + toRoman(numStr.slice(1));
//     } else if(input >= 400){
//       str += 'CD'
//       return str + toRoman(numStr.slice(1));
//     } else if(input >= 100){
//       str += 'C'
//       return str + toRoman(numStr.slice(1));
//     } else if(input >= 90){
//       str += 'XC'
//       return str + toRoman(numStr.slice(1));
//     } else if(input >= 50){
//       str += 'L'
//       return str + toRoman(numStr.slice(1));
//     } else if(input >= 40){
//       str += 'XL'
//       return str + toRoman(numStr.slice(1));
//     } else if(input >= 10){
//       str += 'X'
//       return str + toRoman(numStr.slice(1));
//     } else if(input >= 9){
//       str += 'IX'
//       return str + toRoman(numStr.slice(1));
//     } else if(input >= 5){
//       str += 'V'
//       return str + toRoman(numStr.slice(1));
//     } else if(input >= 4){
//       str += 'IV'
//       return str + toRoman(numStr.slice(1));
//     } else if(input >= 1){
//       str += 'I'
//       return str + toRoman(input-1);
//     } 
//   }
// }


// console.log('My totally sweet testing script for new roman\n')
// console.log('input | expected | actual')
// console.log('——————|——————————|————————')
// console.log('4     | IV       | ', toRoman(4))
// console.log('9     | IX       | ', toRoman(9))
// console.log('23    | XXIII    | ', toRoman(23))
// console.log('1453  | MCDLIII  | ', toRoman(1453))
// console.log('1646  | MDCXLVI  | ', toRoman(1646))

// module.exports = toRoman