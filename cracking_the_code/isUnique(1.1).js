// WRITE AN ALGO TO DETERMINE IF A STRING HAS ALL UNIQUE CHARACTERS.
// BONUS:  WHAT IF YOU CANNOT USE ADDITIONAL DATA STRUCTURES
function isUnique(string){
    checkerObj = {}
    for(char of string){
        if(!(char in checkerObj)) checkerObj[char] = 0
        else return false
    }
    console.log(checkerObj)
    return true
}
// console.log(isUnique('abcdefgh'))
// console.log(isUnique('fjda;jffiea;jfuhai;'))
function isUniqueBonus(string){
    for(let i = 0; i < string.length; i++){
        checker = string[i]
        for(let j = i + 1; j < string.length; j++){
            if(checker == string[j]){
                return false
            }
        }
    }
    return true
}
console.log(isUniqueBonus('abcdefgh'))
console.log(isUniqueBonus('fjda;jffiea;jfuhai;'))