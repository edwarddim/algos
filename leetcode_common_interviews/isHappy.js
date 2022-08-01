/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let seen = new Set()

    while(n !== 1 && seen.has(n) === false){
        seen.add(n)
        n = getNext(n)
    }
    return n == 1
};

var getNext = (n) => {
    let total = 0;
    while(n > 0){
        let digit = n % 10;
        total += Math.pow(digit, 2)
        n = Math.floor(n/10)
    }
    return total
}

// console.log(isHappy(19))
console.log(isHappy(2))