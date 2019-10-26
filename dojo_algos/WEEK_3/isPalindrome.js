function isPalindrome(string){
    for(let i = 0; i < Math.floor(string.length/2); i++){
        if(string[i] === string[string.length-1-i]){
            continue
        }
        else{
            console.log("NOT PALINDROME")
            return
        }
    }
    console.log("PALINDROME")
}
// isPalindrome('madam')
// isPalindrome('tacocat')
// isPalindrome('abba')
// isPalindrome("someone")
