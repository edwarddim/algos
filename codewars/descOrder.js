function descOrder(num){
    var numLength = getDigitCount(num)
    // console.log("num length: ", numLength)
    var 
    for(let i = numLength; i > 0; i--){
        console.log("Digit at " , i ,getDigit(num, i))

    }
}
function getDigit(number, n) {
    return Math.floor((number / Math.pow(10, n - 1)) % 10);
}
function getDigitCount(number) {
    return Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
}


// console.log(descOrder(0))
// console.log(descOrder(1))
console.log(descOrder(123456789))