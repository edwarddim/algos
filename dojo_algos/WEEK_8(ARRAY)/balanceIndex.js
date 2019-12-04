// WRITE A FUNCITON THAT RETURNS WHETER THE GIVEN ARRAY HAS A BALANCE INDEX
// WHERE THE SUM ON EITHER SIDE OF THE INDEX IS THE SAME

function balanceIndex(arr){
    if(arr.length < 3) return -1 
    var leftInd = 0;
    var rightInd = arr.length-1;
    var leftSum = 0
    var rightSum = 0
    while(rightInd - leftInd != 0){
        if(leftSum <= rightSum){
            leftSum += arr[leftInd]
            leftInd++
            console.log("LEFT SUM ADDED: ", leftSum)
        }
        else {
            rightSum += arr[rightInd]
            rightInd--
            console.log("RIGHT SUM ADDED: ", rightSum)

        }
    }
    console.log("LEFT SUM: ", leftSum)
    console.log("RIGHT SUM: ", rightSum)
    console.log("LEFT INDEX: ", leftInd)
    console.log("RIGHT INDEX: ", rightInd)
    return (leftSum == rightSum) ? leftInd : -1
}

// ARRAYS WITH NEGATIVES DO  NOT WORK WITH THIS ALGO CURRENTLY!!!!
// console.log(balanceIndex([-2,5,7,0,3]))

// console.log(balanceIndex([9,9]))
// console.log(balanceIndex([4,2,2,6]))
// console.log(balanceIndex([9,1,9]))
