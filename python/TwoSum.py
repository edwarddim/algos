class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        answer = []
        i = 0
        difference_dictionary = {}
        difference_dictionary[target - nums[i]] = i
        for i in range(1, len(nums)):
            target_diff = nums[i]
            if target_diff not in difference_dictionary:
                difference_dictionary[target - nums[i]] = i
            else:
                answer.append(difference_dictionary[target_diff])
                answer.append(i)
                return answer




    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        answer = []
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    print(i)
                    print(j)
                    answer.append(i)
                    answer.append(j)
                    return answer