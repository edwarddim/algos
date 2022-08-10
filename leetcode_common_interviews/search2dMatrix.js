/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {

    let topRow = 0;
    let bottomRow = matrix.length - 1;
    
    while(topRow <= bottomRow){
        let middleRowIndex = Math.floor((bottomRow + topRow) / 2)
        let middleRow = matrix[middleRowIndex]
        if(target < middleRow[0]){
            bottomRow = middleRowIndex - 1
        }
        else if(target > middleRow[middleRow.length-1]){
            topRow = middleRowIndex + 1
        }
        else{
            // TARGET IS IN BETWEEN FIRST AND LAST ROW NUMBER
            let left = 0;
            let right = middleRow.length - 1;
            while(left <= right){
                let middleIndex = Math.floor((right+left)/2)
                if(target === middleRow[middleIndex]){
                    return true
                }
                else if(target < middleRow[middleIndex]){
                    right = middleIndex - 1
                }
                else{
                    left = middleIndex + 1
                }
            }
            return false
        }
    }
    return false;
};

// searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)
searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)