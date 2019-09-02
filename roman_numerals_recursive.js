function toRoman(input) {
  // start your code here

  var array = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']]
  var str = ''
  
  if(input>3000) return 'invalid number'

  if(input == 0)
  return ''

    for(var i = 0; i<array.length;i++){
      if (input >= array[i][0] ){
      str +=array[i][1]
      return str + toRoman(input-array[i][0]);
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
