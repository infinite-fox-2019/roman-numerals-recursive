function toRoman(input) {
  // start your code here
  var obj = {
      'M' : 1000,
      'D' : 500,
      'C' : 100,
      'L' : 50,
      'X' : 10,
      'V' : 5,
      'I' : 1
  }
  var hasil = ""
  if(input == 0){
      return ""
  }
  else if (input > 3000){
      return "input maksimal 3000"
  }
  for(var i = 0 ; i < Object.keys(obj).length ; i++){
      if(Math.floor(input / obj[Object.keys(obj)[i]]) != 0){
          if(Math.floor(input / obj[Object.keys(obj)[i]]) == 4){
              hasil += Object.keys(obj)[i]
              hasil += Object.keys(obj)[i-1]
              return hasil + toRoman(input % obj[Object.keys(obj)[i]])
          }
          else if(Math.floor(input / obj[Object.keys(obj)[i+1]]) == 9){
              hasil += Object.keys(obj)[i+1]
              hasil += Object.keys(obj)[i-1]
              return hasil + toRoman(input % obj[Object.keys(obj)[i+1]])
          }
          else{
              for(var j = 0 ; j < Math.floor(input / obj[Object.keys(obj)[i]]) ; j++){
                  hasil += Object.keys(obj)[i]
              }
              return hasil + toRoman(input % obj[Object.keys(obj)[i]])
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