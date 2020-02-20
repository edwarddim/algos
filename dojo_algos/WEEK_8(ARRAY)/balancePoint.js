// WRITE A FUNCITON THAT RETURNS WHETER THE GIVEN ARRAY HAS A BALANCE POINT BETWEEN THE INDICES
// WHERE ONE SIDE IS EQUAL TO THE OTHER

function balancePoint(arr){
    if(arr.length < 2) return false
    var leftInd = 0;
    var rightInd = arr.length-1;
    var leftSum, rightSum = 0
    while(leftInd <= rightInd){
        if(leftSum <= rightSum){
            leftSum += arr[leftInd]
            leftInd++
        }
        else {
            rightSum += arr[rightInd]
            rightInd--
        }
    }
    // console.log("LEFT SUM: ", leftSum)
    // console.log("RIGHT SUM: ", rightSum)
    return (leftSum == rightSum) ? true : false
}
// console.log(balancePoint([1,2,3,4,10])) // TRUE
// console.log(balancePoint([1,2,3,2,1]))  // FALSE
// console.log(balancePoint([1,2,4,1,2,3,2,1]))  // TRUE
// console.log(balancePoint([2,2]))  // TRUE