class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        roman_dict = {
            'I':1,
            "V":5,
            'X':10,
            'L':50,
            'C':100,
            'D':500,
            'M':1000
        }
        string_length = len(s)
        total = 0
        for i in range(0, string_length - 1):
            current_val = roman_dict[s[i]]
            next_val = roman_dict[s[i+1]]
            if current_val < next_val:
                total -= current_val
            else:
                total += current_val
        return total + roman_dict[s[string_length - 1]]

