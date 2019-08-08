function highAndLow(numString){
    var numArrAfterSplice = [];
    var intArr = [];
    numArrAfterSplice = numString.split(" ");
    for(let i = 0; i < numArrAfterSplice.length; i++){
        intArr.push(parseInt(numArrAfterSplice[i], 10));
    }
    var max = intArr[0];
    var min = intArr[0];
    for(let i = 1; i < intArr.length; i++){
        if(intArr[i] > max){
            max = intArr[i]
        }
        if(intArr[i] < min){
            min = intArr[i]
        }
        // console.log("max is :", max)
        // console.log("min is :", min)
    }
    console.log(max + " " + min)
    return max + " " + min;
}


highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"