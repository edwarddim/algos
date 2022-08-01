/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    let obj = {}
    for(let num = 1; num <= numRows; num++){
        obj[num] = ""
    }

    let strIdx = 0;
    while(strIdx < s.length){
        for(let i = 1; i <= numRows; i++){
            obj[i] += s.charAt(strIdx)
            strIdx++
        }
        for(let j = numRows-1; j > 1; j--){
            obj[j] += s.charAt(strIdx)
            strIdx++
        }
    }
    let solution = ""
    for(let num = 1; num <= numRows; num++){
        solution += obj[num]
    }
    return solution
};

console.log(3, "PAYPALISHIRING");