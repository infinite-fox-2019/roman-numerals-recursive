function toRoman(integer) {
  // start your code here

  function eachIntegerToRoman(eachInteger){
    if(eachInteger === 1)return 'I'
    else if(eachInteger === 4)return 'IV'
    else if(eachInteger === 5)return 'V' 
    else if(eachInteger === 9)return 'IX'
    else if(eachInteger === 10)return 'X'
    else if(eachInteger === 40)return 'XL'
    else if(eachInteger === 50)return 'L'
    else if(eachInteger === 90)return 'XC'
    else if(eachInteger === 100)return 'C'
    else if(eachInteger === 400)return 'CD'
    else if(eachInteger === 500)return 'D'
    else if(eachInteger === 900)return 'CM'
    else if(eachInteger === 1000)return 'M'
  }


  var integerContainer = []

  function decreaseInteger(integer){
      if(integer === 0)return 0;
      function declarePecahan(integer){
          var arr = [Infinity, 1000, 500 ,400 ,100, 90, 50, 40, 10 , 9 , 5 , 4 , 1, 0]
          for(var i = 0; i < arr.length; i++){
              if(arr[i] <= integer)return arr[i]    
          }
      }
      integerContainer.push(declarePecahan(integer))
      return decreaseInteger(integer - declarePecahan(integer))    
  }

  decreaseInteger(integer);

  var output = ''
  for(var i = 0; i < integerContainer.length; i++){
      output += eachIntegerToRoman(integerContainer[i])
  }

  return output
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

