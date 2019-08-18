function makeArrayConsecutive2(statues) {
    if(statues.length == 1){
        return 0;
    }
    statues.sort();
    var countSum = 0;
    for(let i = 0; i < statues.length-1; i++){
        countSum += statues[i+1] - statues[i] - 1;
    }
    return countSum
}


console.log(makeArrayConsecutive2([6, 2, 3, 8]))
console.log(makeArrayConsecutive2([0, 3]))
console.log(makeArrayConsecutive2([5, 4, 6]))
console.log(makeArrayConsecutive2([6, 3]))
console.log(makeArrayConsecutive2([1]))