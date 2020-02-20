// Find next largeest number using the same digits within said number
// example
// 1234 => 1243
// 4321 => impossible
function nextLargeNum(num){
    var numLength = num.toString().length;
    numArr = [...num.toString()]
    // GOING DOWN FROM RIGHT SIDE FIND THE FIRST DIGIT THAT IS LESS THAN PREVIOUS DIGIT
    for(var i = numLength-1; i > 0; i--){
        if(numArr[i-1] < numArr[i]){
            break
        }
    }
    // IF ALL NUMBERS ARE ASCENDING FROM RIGHT TO LEFT, THEN IT IS IMPOSSIBLE
    if(i == 0){
        console.log("NOT POSSIBLE")
        return
    }
    var smallValue = numArr[i-1]
    var smallIndex = i
    for(var j = i+1; j < numLength; j++){
        if(numArr[j] > smallValue && numArr[j] < numArr[smallIndex]){
            smallIndex = j
        }
    }
    var temp = numArr[smallIndex]
    numArr[smallIndex] = numArr[i-1]
    numArr[i-1] = temp
    // SORT THE RIGHT SIDE OF THE SMALL INDEX //
    var rArr = numArr.slice(i,numLength).sort()
    numArr.splice(i,numLength)
    numArr = numArr.concat(rArr)
    var answer = ""
    for(let i=0; i < numArr.length; i++){
        answer += numArr[i]
    }
    console.log(parseInt(answer,10))
}
// nextLargeNum(4321);
nextLargeNum(1234);
nextLargeNum(218765);
