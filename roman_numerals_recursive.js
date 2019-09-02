function toRoman(input) {
  if (input == 0){
    return ""
  }
  var convert = {
    1 : 'I',
    4 : 'IV',
    5 : 'V',
    9 : 'IX',
    10 : 'X',
    40 : 'XL',
    50 : 'L',
    90 : 'LC',
    100 : 'C',
    400 : 'CD',
    500 : 'D',
    900 : 'CM',
    1000 : 'M'
  }
 var angka = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
 for (var i=0; i<angka.length;i++){
   while (input >= angka[i]){
     input = input - angka[i]
     return convert[angka[i]] + toRoman(input)
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
