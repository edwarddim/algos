class Solution:

    def longestPalindrome(self, s: str) -> int:
        string_counter = Counter(s)
        result = 0
        even = [value for value in string_counter.values() if value % 2 == 0]
        odd = [value for value in string_counter.values() if value % 2 == 1]
        if odd:
            sum_odds = sum(odd) - (len(odd) - 1)
            return sum(even) + sum_odds
        return sum(even)

    # def longestPalindrome(self, s: str) -> int:
    #     string_dictionary = {}
    #     for letter in s:
    #         if letter not in string_dictionary:
    #             string_dictionary[letter] = 1
    #         else:
    #             string_dictionary[letter] += 1
    #     odd_freq = 0
    #     longest_length = 0
    #     for key in string_dictionary:
    #         key_frequency = string_dictionary[key]
    #         if key_frequency % 2 == 0 :
    #             longest_length += key_frequency
    #             continue
    #         if key_frequency > odd_freq:
    #             odd_freq = key_frequency

    #     return longest_length + odd_freq