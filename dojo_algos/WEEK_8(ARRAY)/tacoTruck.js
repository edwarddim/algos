function tacoTruck(customerArr){
    var minY = customerArr[0]['y']
    var maxY = customerArr[0]['y']
    var minX = customerArr[0]['x']
    var maxX = customerArr[0]['x']
    for(let i = 1 ; i < customerArr.length; i++){
        console.log(customerArr[i])
        if(customerArr[i]['x'] < minX ){
            minX = customerArr[i]['x']
        }
        if(customerArr[i]['x'] > maxX ){
            maxX = customerArr[i]['x']
        }
        if(customerArr[i]['y'] < minY ){
            minY = customerArr[i]['y']
        }
        if(customerArr[i]['y'] > maxY ){
            maxY = customerArr[i]['y']
        }
    }
    for(var i = minX; i < maxX; i++){
        for(var j = minY; j < maxY; j++){
            var temp = 0
        }
    }
}
var customers = [
    {'x' : 0, 'y' : 2},
    {'x' : 6, 'y' : -5},
    {'x' : -4, 'y' : 0},
]
tacoTruck(customers)