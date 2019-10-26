function isAnagram(string1, string2){
    dict1 = {}
    if(string1.length != string2.length){
        return false
    }
    for(let i = 0; i < string1.length; i++){
        if(string1[i] in dict1){
            dict1[string1[i]] += 1
        }
        else{
            dict1[string1[i]] = 1
        }
    }
    for(let j = 0; j < string2.length; j++){
        if(string2[j] in dict1){
            dict1[string2[j]] -= 1
            if(dict1[string2[j]] < 0){
                return false
            }
        }
        else{
            return false
        }
    }
    return true
}

console.log(isAnagram("ate", "tea"))
console.log(isAnagram("listen", "silent"))
console.log(isAnagram("listen", "silenz"))
console.log(isAnagram("reed", "deer"))