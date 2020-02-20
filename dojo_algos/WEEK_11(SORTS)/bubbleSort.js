// RUNNING A PAPER EXAMPLE OF A SORTING ALGO AT WORK HELPS VISUALIZE THE INDIVIUDAL COMPARISONS THAT ARE RUN
// IT ALSO HELPS WITH PSEUDO CODE THE SOLUTION

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        var swapped = false;
        for(let j = 0; j < arr.length-i; j++){
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
    console.log(arr)
}

bubbleSort([5,3,7,9,24,15,37,2,1,8])
bubbleSort([2,1,3,4,5,6,7,8])