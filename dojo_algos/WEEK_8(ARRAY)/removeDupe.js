// GIVEN AN ARRAY, RETURN ARRAY WITHOUT DUPES
// [1,2,1,3,4,2] => [1,2,3,4]

// CHALLENGE: RETURN SAME ARRAY

function removeDupe(arr){
    var obj = {}
    for(let i = 0; i < arr.length; i++){
        if( !obj[arr[i]] ){
            obj[arr[i]] = 1
        }
        else{
            arr.splice(i,1)
            // console.log("ARR AFTER SLICE: ", arr)
            i--
        }
    }
    return arr
}


console.log(removeDupe([1,2,1,3,4,2]))
// console.log(removeDupe([1,2,3]))