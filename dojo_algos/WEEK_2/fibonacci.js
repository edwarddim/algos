function fibonacci(num){
    if(num === 0){
        return 0
    }
    if(num === 1){
        return 1
    }
    return fibonacci(num-1) + fibonacci(num-2)
}

console.log(fibonacci(6))


function fib(num){
    var prevNum = 0
    var currentNum = 1
    var nextNum
    if(num == 0) return 0
    if(num == 1) return 1
    for(var i = 1; i < num; i++){
        nextNum = prevNum + currentNum
        prevNum = currentNum
        currentNum = nextNum
    }
    return nextNum
}