// GIVEN TWO STRINGS, WRITE A METHOD TO DECIDE IF ONE IS A PERMUTATION OF THE OTHER
function isPermuation(string1, string2){
    var string1arr = [...string1].sort()
    var string2arr = [...string2].sort()

    if(string1arr.length != string2arr.length){
        return false
    }
    else{
        for(let i = 0; i < string1.length; i++){
            if(string1arr[i] != string2arr[i]){
                return false
            }
        }
        return true
    }
}
console.log(isPermuation('test', 'tewt'))