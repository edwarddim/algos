class Solution:
    def climbStairs(self, n: int) -> int:
        first_val = 1
        second_val = 1
        total = 0
        if n == 1:
            return 1
        for i in range(2, n + 1):
            total = first_val + second_val
            first_val = second_val
            second_val = total
        return total
