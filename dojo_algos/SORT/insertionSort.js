function insertionSort(arr){
    for(let i = 1; i < arr.lenght; i++){
        var key = arr[i]
        var j = i - 1
        while(j >=0 && key < arr[j]){
            arr[j+1] = arr[j]
            j -= 1
        }
        arr[j+1] = key
    }
}