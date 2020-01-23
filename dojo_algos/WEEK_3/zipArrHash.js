function zipArrHash(keyArr, valArr){
    var obj = {}
    for(let i = 0; i < keyArr.length; i++){
        obj[keyArr[i]] = valArr[i]
    }
    console.log(obj)
    return obj
}
var keys = ['foo', 'bar', 'qux']
var values = ['1', '2', '3']
console.log(zipArrHash(keys, values))