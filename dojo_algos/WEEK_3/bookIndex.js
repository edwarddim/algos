// [1,13,14,15,37,38,70] => "1, 13-15, 37-38, 70"
function bookIndex(arr){
    var returnString = ''
    for(let i = 0; i < arr.length; i++){
        if( (arr[i+1] - arr[i]) == 1 ){
            var dash = ''
            dash += arr[i]
            while((arr[i+1] - arr[i]) == 1){
                i++
            }
            dash = dash + "-" + arr[i] + ", "
            returnString += dash
        }
        else{
            returnString = returnString + arr[i] + ', '
        }
    }
    console.log(returnString.slice(0, returnString.length-2))
}
bookIndex([1,13,14,15,37,38,70])