// SOLUTION 2
/**
 * Calculates the total price.
 * @param {string[]} words
 * @param {string} chars
 * @returns {number}
 */
function countCharacters(words, chars){
    answer = 0
    for(let word of words){ // O( )
        word_len = word.length // O( )
        for(char of chars){ // O( )
            if(word.includes(char)){ // O( )
                word = word.replace(char, "") // O( )
            }
        }
        if(word.length == 0){ // O( )
            answer += word_len // O( )
        }
    }
    return answer
}

// SOLUTION 2
/**
 * Calculates the total price.
 * @param {string[]} words
 * @param {string} chars
 * @returns {number}
 */
function countCharacters(words, chars){
    char_obj = {}
    for(const char of chars){ // O( )
        if(char in char_obj){ // O( )
            char_obj[char] += 1 // O( )
        }else{
            char_obj[char] = 1 // O( )
        }
    }

    valid_words = []
    for(const word of words){ // O( )
        word_obj = {}
        for(const char of word){ // O( )
            if(char in char_obj){ // O( )
                word_obj[char] += 1 // O( )
            }else{
                word_obj[char] = 1 // O( )
            }
        }

        flag = true
        for(const keys in Object.keys(word_obj)){ // O( )
            if(!keys in char_obj){ // O( )
                flag = false
                break
            }else if(word_obj[keys] > char_obj[keys]){ // O( )
                flag = false
                break
            }
        }
        if(flag === true){ // O( )
            valid_words.push(word) // O( )
        }
    }
    answer = 0
    for(const word of valid_words){ // O( )
        answer += word.length // O( )
    }
    return answer
}


function charFrequency(chars){
    char_map = {}
    for(const keys in Object.keys(chars)){ // O( )
        if(char in char_map){ // O( )
            char_map[char] += 1 // O( )
        }else{
            char_map[char] = 1 // O( )
        }
    }
    return char_dict
}

function isGood(word, goodFreq){
    word_map = {}
    for(const letter of word){ // O( )
        if(!letter in goodFreq){ // O( )
            return false
        }
        if(letter in word_map){ // O( )
            word_map[letter] += 1 // O( )
            if(word_map[letter] > goodFreq[letter]){ // O( )
                return false
            }
        }else{
            word_map[letter] = 1 // O( )
        }
    }
    return true
}

/**
 * Calculates the total price.
 * @param {string[]} words
 * @param {string} chars
 * @returns {number}
 */
function countCharacters(words, chars){
    goodFreq = charFrequency(chars) // O( )
    lengthCount = 0

    for(const word of words){ // O( )
        if(isGood(word, goodFreq)){ // O( )
            lengthCount += word.length // O( )
        }
    }
    return lengthCount
}