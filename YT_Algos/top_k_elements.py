from collections import Counter
import heapq

"""
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Example 3:
Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2
Output: [1,2]
"""

def topKFrequent(nums: list[int], k: int) -> list[int]:

    freq = Counter(nums)
    minHeap = []
    for num, count in freq.items():
        heapq.heappush(minHeap, (count, num))
        if len(minHeap) > k:
            heapq.heappop(minHeap)
    res = []

    while minHeap:
        res.append(heapq.heappop(minHeap)[1])
    return res

print(topKFrequent([1,1,1,2,2,3], 2))