// PRINT INTEGERS FROM 0 TO 255 AND WITH EACH INTEGER PRINT SUM SO FAR
function PrintIntsAndSum0To255(){
    var sum = 0;
    for( let i = 0; i < 256; i++ ){
        sum = sum + i;
        console.log(sum)
    }
}
// PRINT THE AVERAGE OF THE INCOMING ARRAY
// [1,2,3,4,5]
function PrintAverageOfArray(arr){
    var sum = 0;
    for( let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(sum / arr.length)
}
// RETURN THE GIVEN ARRAY AFTER SETTING NEGATIVE VALUES TO ZERO
// EX. [5,-2,-4,6,1] => [5,0,0,6,1]
function ZeroOutArrayNegativeVals(arr){
    for(let i = 0; i < arr.length; i++){
        if( arr[i] < 0 ){
            arr[i] = 0;
        }
    }
    return arr
}
// GIVEN AN ARRAY, MOVE ALL VALUES TO THE LEFT BY ONE INDEX,
// DROPPING THE FIRST VALUE AND LEAVING A ZERO AT THE END OF ARRAY
// EX. [1,2,3,4,5] => [2,3,4,5,0]
// [1,2,3,4,5] => [2,3,4,5,5]
function ShiftArrayValsLeft(arr){
    for(let i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = 0
    return arr
}