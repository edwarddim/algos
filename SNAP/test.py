def countCharacters(words: list[str], chars: str) -> int:
    answer = 0
    for word in words: # O( )
        word_len = len(word) # O( )  
        for char in chars: # O( ) 
            if char in word: # O( ) 
                word = word.replace(char, '', 1) # O( )
        if(len(word) == 0): # O( ) 
            answer += word_len # O( ) 
    return answer


def countCharacters(words: list[str], chars: str) -> int:
    char_dict = {}
    for char in chars: # O( ) 
        if char in char_dict: # O( ) 
            char_dict[char] += 1 # O( ) 
        else:
            char_dict[char] = 1 # O( ) 
    
    valid_words = []


    for word in words: # O( ) 
        word_dict = {}
        for char in word: # O( ) 
            if char in word_dict: # O( ) 
                word_dict[char] += 1 # O( ) 
            else:
                word_dict[char] = 1 # O( ) 


        flag = True
        for keys in word_dict: # O( ) 
            if keys not in char_dict: # O( ) 
                flag = False
                break
            elif word_dict[keys] > char_dict[keys]: # O( ) 
                flag = False
                break
        
        if flag == True: # O( )
            valid_words.append(word) # O( ) 


    answer = 0
    for word in valid_words: # O( )
        print(word)
        print(len(word))
        answer += len(word) # O( ) 
    return answer

def countCharacters(self, words: List[str], chars: str):
    goodFreq = char_frequency(chars) # O( )
    lengthCount = 0
    # get freq of word
    for word in words: # O( )
        if isGood(word, goodFreq): # O( )
            lengthCount += len(word) # O( )


    return lengthCount


def isGood(word, goodFreq):
   word_dict = {}
   for letter in word: # O( )
       if letter not in goodFreq: # O( )
           return False
      
       if letter in word_dict: # O( )
           word_dict[letter] += 1 # O( )
           if word_dict[letter] > goodFreq[letter]: # O( )
               return False
       else:
           word_dict[letter] = 1 # O( )


   return True


def char_frequency(chars):
   char_dict = {}
   for char in chars: # O( )
       if char in char_dict: # O( )
           char_dict[char] += 1 # O( )
       else:
          char_dict[char] = 1 # O( )
   return char_dict
