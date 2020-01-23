function numTextConvert(number){
    var numDict = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "10": "ten",
        "11": "eleven",
        "12": "twelve",
        "13": "thirteen",
        "14": "fourtenn",
        "15": "fifteen",
        "16": "sixteen",
        "17": "seventeen",
        "18": "eighteen",
        "19": "nineteen",
        "20": "twenty",
        "30": "thirty",
        "40": "fourty",
        "50": "fifty",
        "60": "sixty",
        "70": "seventy",
        "80": "eighty",
        "90": "ninety",
        "100": "hundred"
    }
    var stringNum = number.toString();
    var answer = '';
    
    if(stringNum.length == 4){
        answer += numDict[stringNum.charAt(0)] + " thousand and ";
        answer += numDict[stringNum.charAt(1)] + " hundred ";
        if(stringNum.charAt(2) == '1'){
            answer += numDict[stringNum.charAt(2) + stringNum.charAt(3) + '']
        }
        else if(stringNum.charAt(2)=='0' && stringNum.charAt(3) != '0'){
            answer += "and " + numDict[stringNum.charAt(3)]
        }
        else{
            answer += numDict[stringNum.charAt(2) + "0"]
            answer += numDict[stringNum.charAt(1)]
        }
    }
    if(stringNum.length == 3){
        answer += numDict[stringNum.charAt(0)] + " hundred ";
        if(stringNum.charAt(1) == '1'){
            answer += numDict[stringNum.charAt(1) + stringNum.charAt(2) + '']
        }
        else if(stringNum.charAt(1)=='0' && stringNum.charAt(2) != '0'){
            answer += "and " + numDict[stringNum.charAt(2)]
        }
        else{
            answer += numDict[stringNum.charAt(1) + "0"]
            answer += numDict[stringNum.charAt(0)]
        }
    }
    if(stringNum.length == 2){
        if(stringNum.charAt(0) == '1'){
            answer += numDict[stringNum.charAt(0) + stringNum.charAt(1) + '']
        }
        else if(stringNum.charAt(0)=='0' && stringNum.charAt(1) != '0'){
            answer += "and " + numDict[stringNum.charAt(1)]
        }
        else{
            answer += numDict[stringNum.charAt(0) + "0"]
            answer += '-' + numDict[stringNum.charAt(1)]
        }
    }
    console.log(stringNum + " => " + answer);
}
var number = 45;
numTextConvert(number);

