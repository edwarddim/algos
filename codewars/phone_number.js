function createPhoneNumber(numbers){
    var stringifiedPhoneNumber = "";

    stringifiedPhoneNumber = stringifiedPhoneNumber + "(";
    for(let i=0; i < 3; i++){
        stringifiedPhoneNumber = stringifiedPhoneNumber + numbers[i];
    }
    stringifiedPhoneNumber = stringifiedPhoneNumber + ") ";

    for(let i=3; i < 6; i++){
        stringifiedPhoneNumber = stringifiedPhoneNumber + numbers[i];
    }
    stringifiedPhoneNumber = stringifiedPhoneNumber + "-"

    for(let i=6; i < numbers.length; i++){
        stringifiedPhoneNumber = stringifiedPhoneNumber + numbers[i]
    }
    
    return stringifiedPhoneNumber;
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])