// function GCF(num1, num2){
//     if(num1 == 0) return num2
//     if(num2 == 0) return num1

//     if(num1==num2) return num1

//     if(num1 > num2)return GCF(num1-num2, num2)
//     return GCF(num1, num2-num1)
// }


function GCF(a,b){
    if(b==0){
        return a
    }
    return GCF(b, a%b)
}

console.log(GCF(98, 56))