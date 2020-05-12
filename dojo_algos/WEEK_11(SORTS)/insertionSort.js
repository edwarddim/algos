function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        var key = arr[i]
        var j = i - 1
        while(j >=0 && key < arr[j]){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key  
    }
    return arr;
}
console.log(insertionSort([8,3,9,3,1,6,11,54]))