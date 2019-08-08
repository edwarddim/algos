function spinWords(string){
    var stringArray = string.split(' ')
    var returnArr = []
    for(let word of stringArray){
        if(word.length >= 5 ){
            returnArr.push(word.split('').reverse().join(''))
        }
        else{
            returnArr.push(word)
        }
    }
    return returnArr.join(' ')
}

// function spinWords(words){
//     return words.split(' ').map(function (word) {
//       return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
//   }

console.log(spinWords("Welcome"))
console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("You are almost to the last test"))
console.log(spinWords("Just kidding there is still one more"))
console.log(spinWords("Seriously this is the last one"))