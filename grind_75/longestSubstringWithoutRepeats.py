class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        maxLength = 0
        charMap = {}
        left = 0
        
        for right in range(n):
            right_letter = s[right]
            if right_letter not in charMap or charMap[right_letter] < left:
                charMap[right_letter] = right
                maxLength = max(maxLength, right - left + 1)
            else:
                left = charMap[right_letter] + 1
                charMap[right_letter] = right
        
        return maxLength