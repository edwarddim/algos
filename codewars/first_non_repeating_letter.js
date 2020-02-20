function firstNonRepeatingLetter(string) {
    var letterDict = {};
    [...string].forEach(function(letter, index) {
        if(letter.toLowerCase() in letterDict){
            letterDict[letter.toLowerCase()] = {
                'repeat':true,
                'index':index
            };
        }
        else if(letter.toUpperCase() in letterDict){
            letterDict[letter.toUpperCase()] = {
                'repeat':true,
                'index':index
            };
        }
        else{
            letterDict[letter] = {
                'repeat':false,
                'index':index
            };
        }

    })
    var lowestIndex = string.length;
    var returnAnswer = '';
    for(var letter in letterDict){
        console.log(letterDict[letter])
        console.log(letter)
        if(letterDict[letter].repeat){
            continue;
        }
        else{
            if(letterDict[letter].index < lowestIndex){
                lowestIndex = letterDict[letter].index
                returnAnswer = letter;
            }
        }
    }
    return returnAnswer;
}

// firstNonRepeatingLetter('a')
// firstNonRepeatingLetter('stress')
// console.log(firstNonRepeatingLetter('moonmen'))
console.log(firstNonRepeatingLetter('sTreSS'))