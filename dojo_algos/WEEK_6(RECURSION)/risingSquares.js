function risingSqr(num){
    if(num == 1){
        var arr = []
        arr.push(1)
        return arr
    }
    var returnArr = risingSqr(num-1)
    risingSqr(num-1).push(num * num)
    return returnArr
}
console.log(risingSqr(5))