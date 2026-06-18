class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        word1Length = len(word1)
        word2Length = len(word2)
        word1Index = 0
        word2Index = 0
        combinedWord = ""
        while word1Index < word1Length and word2Index < word2Length:
            combinedWord += word1[word1Index]
            combinedWord += word2[word2Index]
            word1Index += 1
            word2Index += 1
        while word1Index < word1Length:
            combinedWord += word1[word1Index]
            word1Index += 1
        while word2Index < word2Length:
            combinedWord += word2[word2Index]
            word2Index += 1
        return combinedWord
    

"""
- Both words atleast of length 1
- Only lowercase letters

Approach:
- Store result[]
- Use zip() for indexless iteration of both words
- Append leftover chars from longer word via indexing the smaller word

Complexity:
- Time: O(len(word1) + len(word2))
- Memory: O(len(word1) + len(word2))

Interesting Post-Problem Observations:
- We can utilize the same pointer to iterate both words
- Actually, we can avoid manual pointers via zip(word1, word2)
- Efficiency Optimizations: 
    1) Strings are immutable so create a list and join at the end for time efficiency improvement
    2) Utilizing zip(iter1, iter2, ...) can eliminate indexing bugs(assuming index not necessary) when handling multiple        iterables
"""

class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = []

        # Indexless iteration of both words
        for w1, w2 in zip(word1, word2):
            result.append(w1 + w2)

        # Super cool: Indexes starting at the end of smaller word till the end of the longer word
        result.append(word1[len(word2):]) 
        result.append(word2[len(word1):])

        return ''.join(result)