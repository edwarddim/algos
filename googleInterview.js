function async_func(arg1, arg2, callback) {
    console.log(arg1);
    setTimeout(callback, arg2);
}

let async_func_p = promsify(async_func);
let p = async_func_p(arg1, arg2);  // arg1
p.then(....);

// PROMSIFY RETURNS A FUNCTION
// AND THE FUNCTION RETURNS A PROMISE OBEJCT
const promsify = (func) => {
    const return_func = (arg1, arg2) => {
        return Promise(resolve, reject) => {
    func(arg1, arg2, resolve)
}
    }
  }

/*
 * Write a function that searches a sentence (in the form of a string) and returns whether the sentence contains a certain keyword (also in the form of a string).
 *
 * ======== Examples =========
 *
 * Sentence = “bob is an experienced salesman.”
 * Keyword = “salesman”
 * Expected result: true
 *
 * Sentence = “bob is an experienced salesman.”
 * Keyword = “businessman”
 * Expected result: false 
 */


// charAt, charCodeAt
// INPUT: STRING
// OUTPUT : BOOLEAN

//   a  a   b
i
//   a  b
wi


// 012333456
i
// 33333
wi
// match = true
const searchSentence = (sentence, searchWord) => {
    let wordIndex = 0;
    let end = sentence.length
    for (let i = 0; i < sentence.length; i++) {
        // FOUND A MATCHING STARTING CHARACTER
        let match = true;
        let index = i;
        while (wordIndex < searchWord.length) {
            // ITERATE THROUGH THE REST OF THE serchWord
            if (sentence[index] !== searchWord[wordIndex]) {
                match = false
                break;
            }
            index++
            wordIndex++
        }
        if (match) return true
        wordIndex = 0;
    }
    return false
}

1123466667778