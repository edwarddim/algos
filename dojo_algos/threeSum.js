function threeSum(arr, target){
    arr.sort(function(a,b){return a-b})
    var returnArr = []
    for(let i = 0; i < arr.length; i++){
        var j = i + 1
        var k = arr.length -1
        while(j < k){
            var newCombo = []
            if(arr[i] + arr[j] + arr[k] == target ){
                newCombo.push(arr[i])
                newCombo.push(arr[j])
                newCombo.push(arr[k])
                returnArr.push(newCombo)
                break
            }
            else if(arr[i] + arr[j] + arr[k] < target){
                j++
            }
            else{
                k--
            }
        }
    }
    console.log(returnArr)
}


var inputArr = [2,3,12,5,0,7,6,3,-2]
var target = 8

threeSum(inputArr, target)