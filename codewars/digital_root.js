function digital_root(num){
    num_length = num.toString().length
    if(num_length == 1){
        return num;
    }
    else{
        total = 0;
        for(let i=0; i < num_length; i++){
            total = total + parseInt(num.toString().charAt(i), 10)
        }
        if(total.toString().length > 1){
            return digital_root(total)
        }
        else{
            return total;
        }
    }
}

// function digital_root(n) {
//     return (n - 1) % 9 + 1;
//   }
// console.log(digital_root(16))
console.log(digital_root(456))