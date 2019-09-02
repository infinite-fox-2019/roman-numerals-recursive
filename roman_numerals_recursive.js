function toRoman(input) {
  // start your code here
  var obj = [
    ['MM',3000],
    ['M',1000],
    ['CM',900],
    ['D',500],
    ['CD',400],
    ['CC',200],
    ['C',100],
    ['L',50],
    ['XL',40],
    ['X',10],
    ['IX',9],
    ['V',5],
    ['IV',4],
    ['I',1]
]
var temp = ''
  if (input == 0) {
    return ''
  } else {
    for(var i = 0 ; i < obj.length; i++){
      if (input >= obj[i][1]) {
        temp += obj[i][0]
        return temp + toRoman(input - obj[i][1])
      }
    }
  }
}

// console.log('My totally sweet testing script for new roman\n')
// console.log('input | expected | actual')
// console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman
