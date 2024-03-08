class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False

        string_dictionary = {}
        for letter in s:
            if letter not in string_dictionary:
                string_dictionary[letter] = 1
            else:
                string_dictionary[letter] += 1
        
        for letter in t:
            if letter not in string_dictionary:
                return False
            else:
                string_dictionary[letter] -= 1
                if string_dictionary[letter] < 0:
                    return False
        return True