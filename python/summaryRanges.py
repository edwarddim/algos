class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        """
        :type nums: List[int]
        :rtype: List[str]
        """
        nums_length = len(nums)
        return_list = []
        if nums_length == 0:
            return return_list
        current_range = ""
        current_range += str(nums[0])
        i = 0
        while i < nums_length - 1:
            if nums[i+1] - nums[i]==1:
                dash = f'{nums[i]}'
                while i < nums_length - 1 and nums[i+1] - nums[i]==1:
                    i+=1
                dash += f'->{nums[i]}'
                return_list.append(dash)
            else:
                return_list.append(f'{nums[i]}')
            i+=1
        if i == nums_length - 1:
            return_list.append(f'{nums[i]}')
        return return_list
