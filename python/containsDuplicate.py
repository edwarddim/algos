class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        num_dict = {}
        for num in nums:
            if num not in num_dict:
                num_dict[num] = 0
            else:
                return True
        return False