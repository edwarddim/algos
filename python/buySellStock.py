class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        max_profit = 0
        low,hi = 0,1
        while hi < len(prices):
            if prices[hi] < prices[low]:
                low = hi
                hi += 1
            else:
                diff = prices[hi] - prices[low]
                if diff > max_profit:
                    max_profit = diff
                hi += 1

        return max_profit