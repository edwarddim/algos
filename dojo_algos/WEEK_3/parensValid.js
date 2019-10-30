// CHECK FOR IF THE ALL BRACKET TYPES ARE CLOSING CORRECTLY

// THERE ARE TWO WAYS YOU CAN DO THIS, ONE WITH A STACK AND ONE WITH A COUNTER

function parensValid(string){
    var parenStack = []
    var checker = {
        '{' : '}',
        '(' : ')',
        '[' : ']'
    };
    for(char of string){
        if(char === '(' || char === '[' || char === '{'){
            parenStack.push(char)
        }
        else{
            if(checker[parenStack[parenStack.length-1]] === char ){
                parenStack.pop()
            }
            else{
                console.log("NOT VALID")
                return false
            }
        }
    }
    console.log("VALID")
}
// parensValid("{([])}")
// parensValid("{([}")


function parensValidCounter(string){
    let counter = 0;
    for(char of string){
        char === "(" ? counter++ : counter--
        if(counter < 0) return false
    }
    if(counter == 0) return true
}

// console.log(parensValidCounter("(())"))
console.log(parensValidCounter("())("))