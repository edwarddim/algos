/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
<<<<<<< HEAD
 var spiralOrder = function(matrix) {
    
};
=======
var spiralOrder = function (matrix) {
    let height = matrix.length;
    let width = matrix[0].length
    let leftBound = 0
    let rightBound = matrix[0].length

    let topBound = 0
    let bottomBound = matrix.length
    let totalNums = height * width

    let i = 0, j = 0;
    const results = []
    while (leftBound < rightBound && topBound < bottomBound) {
        // LEFT TO RIGHT TOP
        while (j < rightBound) {
            results.push(matrix[i][j])
            j++
        }
        j--
        i++
        if(results.length === totalNums) break
        // TOP TO BOTTOM RIGHT 
        while (i < bottomBound) {
            results.push(matrix[i][j])
            i++
        }
        i--
        j--
        if(results.length === totalNums) break
        // RIGHT TO LEFT BOTTOM
        while (j >= leftBound) {
            results.push(matrix[i][j])
            j--
        }
        j++
        i--
        if(results.length === totalNums) break
        // BOTTOM TO TOP LEFT
        while (i > topBound) {
            results.push(matrix[i][j])
            i--
        }
        leftBound++,rightBound--;
        topBound++,bottomBound--;
        i = leftBound
        j = topBound
    }
    return results
};


console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log( "FINAL: ",spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]))
>>>>>>> 6de4fac2d1361f47d7a9fcc3164e70b49393929e
