class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        current_max, max_till_now = 0, -inf
        for num in nums:
            current_max = max(num, current_max + num)
            max_till_now = max(max_till_now, current_max)
        return max_till_now
