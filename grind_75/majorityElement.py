class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        majority = len(nums) // 2
        number_dictionary = {}
        for num in nums:
            if num in number_dictionary:
                number_dictionary[num] += 1
            else:
                number_dictionary[num] = 1
            if number_dictionary[num] > majority:
                return num
    # Sorting Solution
    # def majorityElement(self, nums: List[int]) -> int:
    #     nums.sort()
    #     n = len(nums) // 2
    #     return nums[n]
    # Moore Voting Algo
    #     def majorityElement(self, nums: List[int]) -> int:
    #         count = 0
    #         candidate = 0
            
    #         for num in nums:
    #             if count == 0:
    #                 candidate = num
                
    #             if num == candidate:
    #                 count += 1
    #             else:
    #                 count -= 1
            
    #         return candidate