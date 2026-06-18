let letters = ['a', 'b', 'c', 'd', 'e']

function example_function(n) {
    for(let i = 0; i < n.length; n++){
        for(let j = 0; j < n.length; n++){
            console.log(n[i], n[j])
        }
    }
}

function example_function(arr) {
    n = arr.length
    for(i in arr){
        j = 1
        while(j < n){
            console.log(arr[i], arr[j])
            j *= 2
        }
    }
}

function example_function(arr){
    i = 1
    n = arr.length
    while(i < n){
        console.log(i)
        i *= 3
    }
}

function example_function(arr){
    n = arr.length
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            k = 1
            while(k < n){
                console.log(arr[i], arr[j], k)
                k *= 2
            }
        }
    }
}

function example_function(arr){
    n = arr.length
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            k = 1
        }
    }
}

example_function(letters)