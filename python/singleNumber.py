class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        dupes = {}
        for num in nums:
            if num not in dupes:
                dupes[nums] = 0
            else:
                del dupes[num]
        for key in dupes:
            return key