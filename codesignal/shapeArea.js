function shapeArea(n) {
    var rowSum = 1;
    var totalSum = 0;
    for(let i = 1; i < n; i++){
        totalSum += rowSum * 2;
        rowSum = rowSum + 2;
    }
    return totalSum += rowSum;
}


console.log(shapeArea(2))
console.log(shapeArea(3))
console.log(shapeArea(1))
console.log(shapeArea(5))
console.log(shapeArea(7000))
console.log(shapeArea(8000))