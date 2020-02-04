// GIVEN "ABC" RETURN ["", "C", "B", "BC", "A", "AC", "AB", "ABC"]

function stringSubset(string, arr){
    if(string.length == 0){
        arr.push("")
        return arr
    }
    for(let i = 0; i < string.length ; i++){
        arr.push(string.slice(i , string.length))
    }
    return stringSubset(string.slice(0, string.length - 1) , arr)
}

console.log(stringSubset("abcd" , []))