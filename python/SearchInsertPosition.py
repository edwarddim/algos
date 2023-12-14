class Solution(object):
    def searchInsert(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        i,j = 0, len(nums) -1 
        while i <= j:
            mid = (i + j) // 2
            if target < nums[mid]:
                j = mid - 1
            elif target > nums[mid]:
                i = mid + 1
            else:
                return mid
        return i


        # for i in range(len(nums)):
        #     if nums[i] == target:
        #         return i
        #     elif target < nums[i]:
        #         return i
        # return len(nums)