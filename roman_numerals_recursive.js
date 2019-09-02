function toRoman(input) {
  // start your code here
  var hasil = ''
  var ref = [[1000, 'M'], [900, 'CM'],[500, 'D'], [400, 'CD'], [100, 'C'], [50, 'L'],[40, 'XL'], [10, 'X'],[9, 'IX'], [5, 'V'],[4,'IV'], [1, 'I'] ]

  if(input == 0){
    return hasil
  } else {
      for(var i = 0; i < ref.length; i++){
          if(Math.floor(input - ref[i][0]) >= 0){
            hasil += ref[i][1]
            return hasil + toRoman(input - ref[i][0]);
          }
      }
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
