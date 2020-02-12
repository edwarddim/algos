function romanToInt(string){
       var romanDict = {
           'I':1,
           'V':5,
           'X':10,
           'L':50,
           'C':100,
           'D':500,
           'M':1000
       }
       var total = 0
       for(let i = 0; i < string.length; i++){
           var current = romanDict[string.charAt(i)]
           var next = romanDict[string.charAt(i+1)]
           if(current < next && i < string.length-1){
               total -= current
           }
           else{
               total += current
           }
        }
       console.log("THE ROMAN NUMERAL ", string, " = ", total)
}

romanToInt("III")
romanToInt("IV")
romanToInt("XIV")
romanToInt("MMMIV")