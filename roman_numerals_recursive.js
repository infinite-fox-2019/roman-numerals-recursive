function toRoman(input) {
  // start your code here
    //base case
    if (input == 0) return ''
    //error handling
    if (input<0 || input>3000) return 'Invalid input'
    //kamus angka romawi
    var rom = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1   
    }
    var output = ''
    for (var key in rom) {
        if (input >= rom[key]) {
            return output += key + toRoman(input-rom[key])
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
