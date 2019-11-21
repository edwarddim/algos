function filler(matrix, x, y, prevNum, number){
    // CHECKING TO SEE IF X OR Y GOES OUTSIDE THE MATRIX
    if(x < 0 || y < 0 || y >= matrix.length || x >= matrix.length || matrix[x][y] != prevNum || matrix[x][y] == number ){
        return
    }
    // CHANGING THE COLOR OF THE [X][Y]
    matrix[x][y] = number

    // RECURSION CALL FOR N, S, W, E
    filler(matrix, x + 1, y, prevNum, number)
    filler(matrix, x - 1, y, prevNum, number)
    filler(matrix, x, y + 1, prevNum, number)
    filler(matrix, x, y - 1, prevNum, number)
}


function floodFill(matrix, x , y, number){
    console.log("matrix BEFORE FLOOD: ")
    console.log(matrix)
    console.log("---------------------------------------------")
    prevNum = matrix[x][y]
    filler(matrix, x, y, prevNum, number)
    console.log(matrix)
    console.log("matrix AFTER FLOOD")
}

var matrix = [
    [1, 1, 1, 1, 1, 1, 1, 1],  
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 1],
    [1, 2, 2, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 2, 2, 0],
    [1, 1, 1, 1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1, 2, 2, 1],
]


floodFill(matrix, 4, 4, 8)