/* ubah jadi rekrusif roman*/

function toRoman(n){

    var ObjOfRoman = {
        "M":1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL": 40, "X": 10, "IX": 9, "V":5, "IV":4, "I":1
    }



    if(n===0){
        return ""
    }else{
        for(var i in ObjOfRoman){
            if(n>=ObjOfRoman[i]){
                n=n-ObjOfRoman[i]
                //console.log(i)
                return i+ toRoman(n)
            }

        }
    }

}

console.log(toRoman(4)) //IV
console.log(toRoman(9)) //IX
console.log(toRoman(23)) // XXIII
console.log(toRoman(1453)) // MCDLIIII
console.log(toRoman(1646)) //MDCXLVI