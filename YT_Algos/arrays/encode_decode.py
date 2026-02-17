"""
https://neetcode.io/problems/string-encode-and-decode

To encode a list of strings into a single string, we need a way to store each string so that we can later separate them 
correctly during decoding. A simple and reliable strategy is to record the length of each string first, followed by a 
special separator, and then append all the strings together. During decoding, we can read the recorded lengths to know 
exactly how many characters to extract for each original string. This avoids any issues with special characters, commas,
or symbols inside the strings because the lengths tell us precisely where each string starts and ends.
"""

def encode(self, strs: list[str]) -> str:
    if not strs:
        return ""
    sizes, result = [], ""
    # ITERATE THRU STRINGS LIST AND CONCAT LENGTH OF STRINGS AND COMMA
    for s in strs:
        result += str(len(s))
        result += ','
    result += '#'
    # ITERATE THRU STRINGS AND CONCAT EACH STRING TO RESULT
    for s in strs:
        result += s
    return result

def decode(self, s: str) -> list[str]:
    if not s:
        return []
    sizes, result, i = [], [], 0
    # ITERATE THRU ENCODED STRING AND EXTRACT LENGTHS OF STRINGS
    while s[i] != '#':
        current = ""
        while s[i] != ',':
            current += s[i]
            i += 1
        sizes.append(int(current))
        i += 1
    i += 1
    # USING THE LENGTH OF STRINGS TO EXTRACT STRINGS
    for sz in sizes:
        result.append(s[i:i + sz])
        i += sz
    return result