// REMOVE THE MOST OUTER PARENS
// EX. "( ()() )()" => "()()"
// EX. "((()))" => "(())"

function removeOuterParens(S){
   let counter = 0;
   let returnStr = '';
   for( let c of S){
       c === '(' ? counter++ : counter--
       if(counter === 1 && c === '(' || counter === 0 && c === ')') continue;
       returnStr += c;
   }
   console.log(temp)
   return temp;
}

removeOuterParens("(()())()")
removeOuterParens("((()))")