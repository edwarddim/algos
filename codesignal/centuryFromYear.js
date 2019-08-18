function centuryFromYear(year) {
    const len = Math.ceil(Math.log10(year+1))
    switch(len){
        case len < 3 : return 1
        default:
            if(year % 100 == 0 ){
                return year / 100
            }
            else{
                return Math.floor(year / 100) + 1
            }
        case 4:
            if(year % 100 == 0){
                return year / 100
            }
            else{
                return Math.floor(year / 100) + 1
            }
    }
}

console.log(centuryFromYear(1905))
console.log(centuryFromYear(1700))
console.log(centuryFromYear(1988))
console.log(centuryFromYear(2000))
console.log(centuryFromYear(2001))
console.log(centuryFromYear(374))
