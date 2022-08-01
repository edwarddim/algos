/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let numString = x.toString();
        let numArr = numString.split("");

    for(let i = numArr.length - 1; i > 0; i--){
        if(numArr[i] === "0"){
            numArr.pop()
        }
        else{
            break
        }
    }
    console.log(numArr)

    let start = (numArr[0] === "-") ? 1 : 0;

    for(let i = start; i < Math.floor(numArr.length/2); i++){
        let temp = numArr[i]
        numArr[i] = numArr[numArr.length - 1 - i]
        numArr[numArr.length - 1 - i] = temp
    }
    console.log(numArr.join(""))

    return parseInt(numArr.join(""))
};


console.log(reverse(123))


console.log(parseInt("-321"))