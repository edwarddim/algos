function checkPalindrome(string) {
    if(string.length == 1){
        return true
    }
    for( let i = 0; i < Math.floor(string.length/2); i++){
        if(string.charAt(i) === string.charAt(string.length - i - 1)){
            continue;
        }
        else{
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome('aabaa'))
console.log(checkPalindrome('c'))
console.log(checkPalindrome('zzzazzazz'))
console.log(checkPalindrome('aabaa'))
console.log(checkPalindrome('abacaba'))