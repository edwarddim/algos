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

camelCase('camelCasing')