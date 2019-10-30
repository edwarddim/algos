// GIVEN "LIVE FROM SATURDAY NIGHT LIVE"
// RETURN "LFSNL"
function acronym(string){
    var list = string.split(" ")
    var returnString = ""
    list.map((word)=>{
        returnString += word[0].toUpperCase()
    })
    console.log(returnString)
}

acronym("live from saturday night live")