class Solution(object):
    def sortArrayByParity(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        parity_array = []
        for num in nums:
            if num % 2 == 0:
                parity_array.insert(0, num)
            else:
                parity_array.append(num)
        return parity_array