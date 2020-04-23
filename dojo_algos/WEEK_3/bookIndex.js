// [1,13,14,15,37,38,70] => "1, 13-15, 37-38, 70"


function bookIndex(arr){
    var returnString = ''
    var returnArr = []
    for(let i = 0; i < arr.length; i++){
        // IF CONSECUTIVE NUMBERS ARE FOUND
        if( (arr[i+1] - arr[i]) == 1 ){
            var dash = ''
            dash += arr[i]
            while((arr[i+1] - arr[i]) == 1){
                i++
            }
            // END OF CONSECUTIVE NUMBERS
            dash = dash + "-" + arr[i]
            returnArr.push(dash)
        }
        // NON-CONSECUTIVE NUMBERS
        else{
            // returnString = returnString + arr[i] + ', '
            returnArr.push(arr[i])
        }
    }
    console.log(returnArr)
}
bookIndex([1,13,14,15,37,38,70])