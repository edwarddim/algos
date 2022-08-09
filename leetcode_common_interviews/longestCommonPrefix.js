/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.length === 1) return strs[0]
    let results = ""
    let end = 1;
    let commonPrefix = strs[0].slice(0, end)
    if(commonPrefix.length === 0) return ""

    while(end <= strs[0].length){
        let checkAllPrefix =  strs.every((string) => string.startsWith(commonPrefix))
        if(checkAllPrefix){
            results = commonPrefix;
            commonPrefix = strs[0].slice(0, ++end)
        }
        else{
            return commonPrefix.slice(0, commonPrefix.length-1)
        }
    }
    return results
};


// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
// console.log(longestCommonPrefix([""]))
// console.log(longestCommonPrefix(["",""]))
// console.log(longestCommonPrefix(["ab", "a"]))
console.log(longestCommonPrefix(["flower","flower","flower","flower"]))


// let string = "a"
// console.log(string.startsWith("ab"))