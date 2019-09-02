function toRoman(input) {
  // start your code here
  var result = '';
  // var arr_number = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  // var arr_romawi = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
  // var arr_result_romawi = []
  // var arr_result_number = []
  // var arr_proses_input = []


  // for (var i = arr_number.length-1; i >= 0; i--) {
  //   while (input >= arr_number[i]) {
  //     input = input - arr_number[i]
  //     arr_result_romawi.push(arr_romawi[i])
  //     arr_result_number.push(arr_number[i])
  //     arr_proses_input.push(input)
  //   }
  // }
  // console.log(arr_result_romawi);
  // console.log(arr_result_number);
  // console.log(arr_proses_input);

  if (input === 0) {
    return result
  } else {
    if (input >= 1000) {
      return 'M' + toRoman(input - 1000)
    } else if (input >= 900) {
      return 'CM' + toRoman(input - 900)
    } else if (input >= 500) {
      return 'D' + toRoman(input - 500)
    } else if (input >= 400) {
      return 'CD' + toRoman(input - 400)
    } else if (input >= 100) {
      return 'C' + toRoman(input - 100)
    } else if (input >= 90) {
      return 'XC' + toRoman(input - 90)
    } else if (input >= 50) {
      return 'L' + toRoman(input - 50)
    } else if (input >= 40) {
      return 'XL' + toRoman(input - 40)
    } else if (input >= 10) {
      return 'X' + toRoman(input - 10)
    } else if (input >= 9) {
      return 'IX' + toRoman(input - 9)
    } else if (input >= 5) {
      return 'V' + toRoman(input - 5)
    } else if (input >= 4) {
      return 'IV' + toRoman(input - 4)
    } else if (input >= 1) {
      return 'I' + toRoman(input - 1)
    }
  }
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

module.exports = toRoman
