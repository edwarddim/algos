class Solution:
    def insertionSort(self, nums: List[int]) -> None:
        for index in range(1, len(nums)):
            key = nums[i]
            j = i - 1
            while j >= 0 and key < nums[j]:
                nums[j + 1] = j[j]
                j = j - 1
            nums[j + 1] = key
            