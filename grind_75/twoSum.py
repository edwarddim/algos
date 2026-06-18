class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        results = []
        difference_dict = {}
        i = 0
        difference_dict[target - nums[i]] = i
        for i in range(1, len(nums)):
            difference = nums[i]
            if difference not in difference_dict:
                difference_dict[target - difference] = i
            else:
                return [difference_dict[difference], i]
