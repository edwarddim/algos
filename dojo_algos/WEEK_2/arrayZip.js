function arrayZip(arr1, arr2){
    var returnArr = []
    for(let i = 0; i < arr1.length; i++){
        returnArr.push(arr1[i])
        returnArr.push(arr2[i])
    }
    return returnArr
}

console.log(arrayZip([1,2,3],[4,5,6]))