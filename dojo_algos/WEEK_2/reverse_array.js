// TALK ABOUT THE RIOT SYSTEM //
// R - RECAP (RESTATE THE PROBLEM BACK TO THE INTERVIEWER, MAKE SURE THAT YOU THOROUGHLY UNDERSTAND THE ALGO)
// IO - INPUT/OUTPUT (UNDERSTAND WHAT KIND OF ARGUMENTS YOU ARE GETTING AND WHETHER OR NOT YOU ARE RETURNING OR NOT)
// T - TEST CASES (WRITE OUT SOME TEST CASES AND THINK OF SOME EDGE CASES THAT MAY TRIP YOUR ALGO UP)

// CHALLENGE WOULD BE TO DO IT WITHOUT CREATING ANOTHER ARRAY
function reverseArr(arr){
    for(let i = 0; i < Math.floor(arr.length/2); i++){
        var temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    console.log(arr)
}
reverseArr([1,2,3,4,5,6,7])