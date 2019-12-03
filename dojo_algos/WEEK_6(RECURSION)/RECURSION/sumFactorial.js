function sumFactorial(num){
    if(num === 0){
        return 0
    }
    return num + sumFactorial(num-1)
}
console.log(sumFactorial(4))