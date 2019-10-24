// GIVEN AN ARRAY OF INTEGERS, MOVE THE ZEROS TO THE BACK WHILE KEEPING
// THE ORDER OF THE NON-ZEROES IN PLACE
// EX. [1,0,2,3,0,4,0,2] => [1,2,3,4,2,0,0,0]
function moveZero(arr){
    var numArr = []
    var zeroArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            zeroArr.push(0)
        }
        else{
            numArr.push(arr[i])            
        }
    }
    console.log(numArr.concat(zeroArr))
}

function moveZeroSplice(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            arr.push(0)
            arr.splice(i, 1)
        }
    }
    console.log(arr)
}

function moveZeroE(arr){
    var count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            count++
        }
        else{
            var temp = arr[i]
            arr[i] = arr[i-count]
            arr[i-count] = temp
        }
    }
    console.log(arr)
}
moveZero([1,0,2,3,0,4,0,2])
moveZeroSplice([1,0,2,3,0,4,0,2])
moveZeroE([1,0,2,3,0,4,0,2])