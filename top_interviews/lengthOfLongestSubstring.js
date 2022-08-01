/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length == 0){
        return 0
    }
    let substring = s[0]
    let substringLength = 1
    for(let i = 1; i < s.length; i++){
        if(substring.includes(s[i])){
            if(substring.length > substringLength){
                substringLength = substring.length
            }
            substring = s[i]
        }
        else{
            substring += s[i]
        }
    }
    return (substring.length > substringLength) ? substring.length : substringLength
};

var lengthOfLongestSubstring = function(s) {
    if(s.length == 0){
        return 0
    }
    let substringLength = 1
    for(let i = 0; i < s.length; i++){
        let substring = s[i]
        for(let j = i + 1; j < s.length; j++){
            if(substring.includes(s[j])){
                break
            }
            else{
                substring += s[j]
            }
        }
        if(substring.length > substringLength){
            substringLength = substring.length
        }
    }
    return substringLength
};
// ITERATE THROUGH STRING