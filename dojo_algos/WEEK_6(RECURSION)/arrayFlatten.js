function flatten(arr){
    if(!Array.isArray(arr)) {
        return [arr];
      }
    
    var array = [];
    for(var i = 0; i < arr.length; i++) {
        array = array.concat(flatten(arr[i]));
    }
    return array;
}
console.log(flatten([1,[2,3,[4]],5]))