class Solution:
    def mergeSort(self, numbers: List[int]) -> None:
        if len(numbers) > 1: 
            r = len(numbers)//2
            left_nums = array[:r]
            right_nums = array[r:]

            mergeSort(left_nums)
            mergeSort(right_nums)

            i = j = k = 0

            while i < len(left_nums) and j < len(right_nums):
                if left_nums[i] < right_nums[j]:
                    numbers[k] = left_nums[i]
                    i += 1
                else:
                    numbers[k] = right_nums[j]
                    j += 1
                K += 1
            
            while i < len(left_nums):
                numbers[k] = left_nums[i]
                i += 1
                k += 1
            while j < len(right_nums):
                numbers[k] = right_nums[j]
                j += 1
                k += 1