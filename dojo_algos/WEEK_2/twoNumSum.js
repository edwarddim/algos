// GO OVER BIG O NOTATION AND IT'S IMPORTANCE
// TALK ABOUT BEST, AVG, AND WORST CASE SCENARIOS


// GIVEN AN ARRAY OF NUMBERS, RETURN AN ARRAY FILLED WITH ALL THE TWO NUM SUMS WITHIN THE ARRAY

function twoNumSum(arr){
    var returnArr = []
    for(let i = 0; i < arr.length; i++){
        for(let j = i; j<arr.length; j++){
            returnArr.push(arr[i] + arr[j])
        }
    }
    return returnArr
}

console.log(twoNumSum([1,2,3,4,5,6]))