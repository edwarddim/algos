function GCF(num1, num2){
    if(num1 == 0) return num2
    if(num2 == 0) return num1

    if(num1==num2) return num1

    if(num1 > num2)return GCF(num1-num2, num2)
    return GCF(num1, num2-num1)
}


// function GCF(a,b){
//     if(b==0){
//         return a
//     }
//     return GCF(b, a%b)
// }

console.log(GCF(98, 56))
console.log(GCF(14, 60))

// 14,60
// 14,46
// 14,32
// 14,18
// 14,4
// 10,4
// 6,4
// 2,4
// 2,2


// 14,35
// 14,21
// 14,7
// 7,7