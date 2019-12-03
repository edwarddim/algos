// TAKE A CAMEL CASE STRING AND SEPARATE SPLIT THE WORDS

function camelCase(string){
    var returnString = '';
    [...string].forEach(letter => {
        if(letter == letter.toUpperCase()){   
            returnString = returnString + ' ' + letter;
        }
        else{
            returnString = returnString + letter;
        }
    })
    return returnString
}

console.log(camelCase('camelCasing'))