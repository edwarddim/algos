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

function longestPalindrome(string){
    var maxLength = 1
    var start = 0
    var low = 0
    var high = 0

    for(let i = 1; i < string.length; i++){
        low = i-1
        high = i
        while( low >= 0 && high < string.length && string[low] == string[high]){
            if(high - low + 1 > maxLength){
                start = low
                maxLength = high - low + 1
            }
            low -= 1
            high += 1
        }
        low = i-1
        high = i+1
        while( low >= 0 && high < string.length && string[low] == string[high]){
            if(high - low + 1 > maxLength){
                start = low
                maxLength = high - low + 1
            }
            low -= 1
            high += 1
        }
    }
    console.log(string.substring(start, start + maxLength))
}

// longestPalindrome("eqwewqtrertgtrsgyt")
// longestPalindrome("reafsforgeeksskeegrofsfwe")