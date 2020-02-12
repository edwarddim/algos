function heapify(arr, length, i){
    let smallest = i
    let left = (i * 2) + 1
    let right = left + 1
    console.log("-----------------------------------------------------")
    console.log("LEFT VAL: ", arr[left], "PARENT VAL: ", arr[smallest] ," RIGHT VAL: ", arr[right])
    console.log('BEGIN ARR: ', arr)
    if(left < length && arr[left] < arr[smallest]){
        smallest = left
    }
    if(right < length && arr[right] < arr[smallest]){
        smallest = right
    }
    if(smallest != i){
        let temp = arr[smallest]
        arr[smallest] = arr[i]
        arr[i] = temp
        console.log("ARR AFTER SWAP: ", arr)
        console.log("SMALLEST INDEX: ", smallest, " VAL: ", arr[smallest])
        heapify(arr, length, smallest)
    }
    return arr
}
function heapSort(arr){
    let length = arr.length
    let i = Math.floor(length/2 - 1)
    console.log("*****************************************************************")
    console.log("LAST PARENT NODE: ", i)
    console.log("LAST PARENT NODE VAL: ", arr[i])
    console.log("BEGINNING ARR: ", arr)
    while( i >= 0){
        heapify(arr, length, i)
        i--
    }
    console.log("*****************************************************************")
    console.log("START SORT .. START SORT .. START SORT .. START SORT.. START SORT")
    console.log("*****************************************************************")
    let k = length - 1
    while(k >= 0){
        let temp = arr[0]
        arr[0] = arr[k]
        arr[k] = temp
        heapify(arr, k, 0)
        k--
    }
    return arr
}

console.log("SORTED HEAP: ", heapSort([6,5,3,1,8,7,2,4]))