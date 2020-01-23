// # 1
function print1to255(){
    for(let i = 0; i < 256; i++){
        console.log(i)
    }
}
// # 2
function odd255(){
    for(let i = 1 ; i < 256; i = i + 2){
        console.log(i)
    }
}
// # 3
function intAndSum(){
    var sum = 0
    for(let i = 0; i < 256; i++){
        sum += i
        console.log(sum)
        console.log(i)
    }
}
// # 4
function printArr(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
// # 5
function printMax(arr){
    var max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
}
// # 6
function printAverage(arr){
    var avg
    for(let i = 0; i < arr.length; i++){
        avg += arr[i]
    }
    console.log(avg/arr.length)
}
// # 7
function oddArr(){
    var newArr = []
    for(let i = 1; i < 256; i= i +2){
        newArr.push(i)
    }
}
// # 8
function sqrVal(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i]
    }
    return arr
}
// # 9
function greaterThanY(arr, y){
    var count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > y){
            count++
            console.log(arr[i])
        }
    }
    console.log("Number bigger than Y ",count )
}
// # 10
function zeroOutNegative(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
}
// # 11
function maxMinAvg(arr){
    var min, max = arr[0]
    var avg = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
        avg += arr[i]
    }
    console.log(max)
    console.log(min)
    console.log(avg/arr.length)
}
// # 12
function shiftArrayValsLeft(arr){
    for(let i =0; i < arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length-1] = 0
    console.log(arr)
}
// # 13
function swapStringForArrayNegativeVals(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = "Dojo"
        }
    }
}