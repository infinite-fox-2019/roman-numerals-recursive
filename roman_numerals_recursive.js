function toRoman(input) {
  
  var romans = ['M','CM','DC','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  var arabics = [1000,900,600,500,400,100,90,50,40,10,9,5,4,1];
  var output = ''
  
  
  if(input <= 0){
    return ''

  }else{

    for(var i=0; i<arabics.length; i++){
      if(input >= arabics[i]){
        return romans[i] + toRoman(input - arabics[i])
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


