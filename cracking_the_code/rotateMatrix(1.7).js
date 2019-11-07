// GIVEN AN IMAGE REPRESENTED BY N x N MATRIX, WHERE EACH PIXEL IS AN INTEGER
// WRITE A METHOD TO ROTATE THE IMAGE BY 90 DEGREES. CAN YOU DO THIS IN PLACE?

function rotateMatrix(matrixArr){
    console.log('------------------------------------------------')
    // PRINTING MATRIX
    for(let i = 0; i < matrixArr.length; i++){
        console.log(matrixArr[i])
    }
    console.log('------------------------------------------------')
    var n = Math.floor(matrixArr.length)
    for(let x = 0; x < n/2; x++){
        for(let y = x; y < n-x-1; y++){
            var temp = matrixArr[x][y]
            matrixArr[x][y] = matrixArr[y][n-1-x]
            matrixArr[y][n-1-x] = matrixArr[n-1-x][n-1-y]
            matrixArr[n-1-x][n-1-y] = matrixArr[n-1-y][x]
            matrixArr[n-1-y][x] = temp
        }
    }
    
    // PRINTING MATRIX
    for(let i = 0; i < matrixArr.length; i++){
        console.log(matrixArr[i])
    }
    console.log('------------------------------------------------')
}

var input4 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

var input3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// rotateMatrix(input4)
rotateMatrix(input3)