// shiftLeft([1,2,3,4] , 2) => [3, 4, 1, 2]

// function shifter(arr){
//     var temp = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = arr[i+1]
//     }
//     arr[arr.length-1] = temp
// }


function shiftLeftBy(arr, by){
    for(let i = 0; i < by; i++){
        // arr.push(arr.shift())
        shifter(arr)
    }
    console.log(arr)
}

shiftLeftBy([1,2,3,4,5] , 3 )