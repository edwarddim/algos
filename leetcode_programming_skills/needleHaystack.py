# Fine solution, but uses memory
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if needle not in haystack:
            return -1
        return haystack.index(needle)

# Sliding Window method
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        hLen, nLen = len(haystack), len(needle)

        i = 0
        while i < hLen:
            nIndex = 0
            j = i

            while (i < hLen and nIndex < nLen) and haystack[j] == needle[nIndex]:
                 j += 1
                 nIndex += 1
                
            if nIndex == nLen:
                return i

            i += 1
        return -1