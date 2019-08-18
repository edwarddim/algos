function adjacentElementsProduct(inputArray) {
    if(inputArray.length == 2){
        return inputArray[0] * inputArray[1]
    }
    var returnInt = inputArray[0] * inputArray[1];
    for(let i = 1; i < inputArray.length; i++){
        var checkValue = inputArray[i] * inputArray[i + 1]
        if( checkValue > returnInt){
            returnInt = checkValue
        }
    }
    return returnInt
}


console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))
console.log(adjacentElementsProduct([-1, -2]))
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]))
console.log(adjacentElementsProduct([1, 2, 3, 0]))