function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        var swapped = false;
        for(let j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                swapped = true
            }
        }
        if(swapped == false){
            break;
        }
    }
}

bubbleSort([5,3,7,9,24,15,37,2,1,8])


