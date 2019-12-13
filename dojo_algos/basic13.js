function print1to255(){
    for(let i = 0; i < 256; i++){
        console.log(i)
    }
}

function odd255(){
    for(let i = 1 ; i < 256; i = i + 2){
        console.log(i)
    }
}

function intAndSum(){
    var sum = 0
    for(let i = 0; i < 256; i++){
        sum += i
        console.log(sum)
        console.log(i)
    }
}

function printArr(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

function printMax(arr){
    var max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log(max)
}

function printAverage(arr){
    var avg
    for(let i = 0; i < arr.length; i++){
        avg += arr[i]
    }
    console.log(avg/arr.length)
}

function oddArr(){
    var newArr = []
    for(let i = 1; i < 256; i= i +2){
        newArr.push(i)
    }
}

function sqrVal(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * arr[i]
    }
    return arr
}

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
function zeroOutNegative(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0
        }
    }
}
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