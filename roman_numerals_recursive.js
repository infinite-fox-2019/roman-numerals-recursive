function toRoman(input) {
  var convertionTable = [
    ['I',1],
    ['IV',4],
    ['V',5],
    ['IX',9],
    ['X',10],
    ['XL',40],
    ['L',50],
    ['XC',90],
    ['C',100],
    ['CD',400],
    ['D',500],
    ['CM',900],
    ['M',1000],
  ]
 
  if(input===0){
      return ''
  }else{
      var output = ''
      var countUp = 0
      for(var i=convertionTable.length-1;i>=0;i--){
          if(convertionTable[i][1]<=input - countUp){
              output += convertionTable[i][0]
              countUp += convertionTable[i][1]
              return output + toRoman(input-countUp)
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
