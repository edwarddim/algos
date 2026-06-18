class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        target = val
        i,j = 0,0
        for j in range(len(nums)):
            if nums[j] != target:
                nums[i] = nums[j]
                i += 1
            else:
                j += 1
        return i



