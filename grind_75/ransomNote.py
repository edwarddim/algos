class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ransom_dict = {}
        magazine_dict = {}
        for letter in magazine:
            if letter in magazine_dict:
                magazine_dict[letter] += 1
            else:
                magazine_dict[letter] = 1

        for letter in ransomNote:
            if letter not in magazine_dict:
                return False
            else:
                magazine_dict[letter] -= 1
                if magazine_dict[letter] < 0:
                    return False
        return True