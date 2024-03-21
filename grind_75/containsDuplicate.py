class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        duplicate_dict = {}
        for num in nums:
            if num not in duplicate_dict:
                duplicate_dict[num] = 0
            else:
                return True
        return False