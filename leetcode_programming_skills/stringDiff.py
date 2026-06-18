class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        count = {}

        for char in t:
            count[char] = count.get(char, 0) + 1
        for char in s:
            count[char] -= 1
            if count[char] == 0:
                del count[char]
        
        return list(count.keys())[0]
    


# In reality, I've never seen people solving the questions with XOR solutions 
# in real interviews, but there are a few ways to solve the question. 
# I think this is O(len(s)+len(t)) time and O(1) space.

class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        res = 0
        
        # XOR all characters in s and t
        for char in s + t:
            res ^= ord(char)
        
        # Convert the XOR result back to character
        return chr(res)


class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        for c in t:
            if t.count(c) > s.count(c):
                return(c)