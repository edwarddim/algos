// Find next largeest number using the same digits within said number
// example
// 1234 => 1243
// 4321 => impossible


function nextLargeNum(num){

    var numArr = [];
    var stringNum = num.toString()
    var numLength = num.toString().length;
    for(let i = 0; i < numLength; i++){
        numArr.push(stringNum.charAt(i));
    }

    console.log(numArr)

}

nextLargeNum(4321);