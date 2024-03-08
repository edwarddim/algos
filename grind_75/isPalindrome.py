class Solution:
    def isPalindrome(self, s: str) -> bool:
        pattern = re.compile('[\W_]+')
        pattern = pattern.sub("", s)
        formatted_string = pattern.lower()
        string_length = len(formatted_string)
        for i in range(string_length//2):
            print(formatted_string[i])
            print(formatted_string[string_length - i - 1])
            if formatted_string[i] == formatted_string[string_length - i - 1]:
                continue
            else:
                return False
        return True