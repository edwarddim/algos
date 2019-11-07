function coinChange(num){
    coinObj = {
        'quarter' : 0,
        'dime' : 0,
        'nickel' : 0,
        'penny' : 0
    }
    coinObj['quarter'] = Math.floor(num / 25)
    num = num % 25
    console.log("LEFT AFTER Q: ", num)
    coinObj['dime'] = Math.floor(num / 10)
    num = num % 10
    console.log("LEFT AFTER D: ", num)
    coinObj['nickel'] = Math.floor(num / 5)
    console.log("LEFT AFTER N: ", num)
    coinObj['penny'] = Math.floor(num / 1)
    console.log(coinObj)
}

// coinChange(321)
coinChange(29)
coinChange(3)