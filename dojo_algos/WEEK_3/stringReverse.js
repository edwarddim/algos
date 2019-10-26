function reverseString(string){
    var letterArr = [...string]
    for(let i = 0; i < Math.floor(letterArr.length/2); i++){
        var temp = letterArr[i]
        letterArr[i] = letterArr[letterArr.length-1-i]
        letterArr[letterArr.length-1-i] = temp
    }
    console.log(letterArr.join(''))
}

reverseString("abcdef")