function toRoman(input) {
  var str = ""
  if (input<0){
    return "Input salah, Silahkan masukan data kembali";
  } else {
    if (input == 0){
      return str;
    } else {
      if (input>=1000){
        str = "M"
        return str + toRoman(input - 1000);
      } else if (input >= 900){
        str+= "CM"
        return str + toRoman(input - 900);
      } else if (input>= 500){
        str+= "D"
        return str + toRoman(input - 500);
      } else if (input>= 400){
        str += "CD"
        return str + toRoman(input - 400);
      } else if (input >= 100){
        str+= "C"
        return str + toRoman(input - 100);
      } else if (input >= 90){
        str+= "XC"
        return str + toRoman(input - 90);
      } else if (input >= 50){
        str += "L"
        return str + toRoman(input - 50);
      } else if (input >= 40){
        str+= "XL"
        return str + toRoman(input - 40);
      } else if (input >= 10){
        str += "X"
        return str + toRoman(input - 10);
      } else if (input >= 9){
        str+= "IX"
        return str + toRoman(input - 9);
      } else if (input >= 5){
        str+= "V"
        return str + toRoman(input - 5);
      } else if (input >= 4){
        str += "IV"
        return str + toRoman(input - 4);
      } else {
        str += "I"
        return str + toRoman(input - 1);
      }
    }
  }
  //return to_roman(input);
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
