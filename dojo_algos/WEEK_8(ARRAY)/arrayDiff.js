// GIVEN TWO ARRAYS, A AND B, RETURN AN ARRAY
// WITH NUMBER THAT DO NOT EXIST ON BOTH ARRAYS

function arrayDiff(a, b){
    var arr = []
    for(let i=0; i < a.length; i++){
        var flag = false
        for(let j=0; j < b.length; j++){
            if(a[i] == b[j]){
                flag = true
            }
        }
        if(!flag){
            arr.push(a[i])
        }
    }
    console.log(arr)
}
arrayDiff([], [4,5])
arrayDiff([3,4], [3])
arrayDiff([1,8,2], [])