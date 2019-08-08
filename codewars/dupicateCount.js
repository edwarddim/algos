function duplicateCount(text){
    var counter = 0;
    var letterDict = {};
    const lowerCaps = text.toLowerCase()
    for(var letter of lowerCaps){
        if(lowerCaps.includes(letter)){
            console.log('repeat')
        }
        else{
            console.log('non')
        }
    }
    console.log(counter)
}

// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }


// duplicateCount("")
// duplicateCount("abcde")
// duplicateCount("aabBcde")
// duplicateCount("Indivisibility")
duplicateCount("Indivisibilities")