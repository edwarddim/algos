function mode(arr){
    var obj = {}
    for(let i = 0; i < arr.length; i++){
        if( !obj[arr[i]] ){
            obj[arr[i]] = 1
        }
        else{
            obj[arr[i]] += 1
        }
    }
    var mode = 0;
    Object.keys(obj).forEach(key =>{
        if(obj[key] > mode){
            mode = key
            count = obj[key]
        }
    })
    return mode
}
console.log(mode([1,2,3,1,1,2,2,5,6]))