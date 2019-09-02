var hasil = [];
function toRoman(input) {
  var isDua = false;
  var strNum = input.toString();
  var arrRoman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  var arrRomanValue = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  if(input == 0){
    var akhir = hasil.join('')
    return akhir;
  }
  else{
    loopBesar:
    for(var i = strNum.length - 1; i>=0; i--){
      var pengali = parseInt(strNum[i]) * (Math.pow(10, (strNum.length - 1) - i));
      var pengurang = pengali;
      if(pengali !== 0){
        for(var j = 0; j<arrRoman.length; j++){
          if(pengali == 0){
            break loopBesar;
          }

          if(pengali == arrRomanValue[j]){
            if(isDua ==true){
              hasil.splice(1,0, arrRoman[j])
            }
            else{
              hasil.unshift(arrRoman[j]);
            }
            break loopBesar;
          }

          else if(pengali - arrRomanValue[j] > 0){
            if(pengali % arrRomanValue[j] == 0){
              var pembagi = pengali / arrRomanValue[j];
              for(var k = 0; k<pembagi; k++){
                if(isDua == true){
                  hasil.splice(1,0, arrRoman[j])
                }
                else{
                  hasil.unshift(arrRoman[j]);
                }
              }
              break loopBesar;
            }
            else{
              isDua = true;
              hasil.unshift(arrRoman[j]);
              pengali -= arrRomanValue[j];

            }
          }
        }
      }
    }
    return toRoman(input - pengurang);
  }
}


console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
hasil = [];
console.log('9     | IX       | ', toRoman(9))
hasil = [];
console.log('23    | XXIII    | ', toRoman(23))
hasil = [];
console.log('1453  | MCDLIII  | ', toRoman(1453))
hasil = [];
console.log('1646  | MDCXLVI  | ', toRoman(1646))
hasil = [];

module.exports = toRoman