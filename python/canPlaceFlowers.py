class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        available = 0
        i = 0
        while i < len(flowerbed):
            if flowerbed[i] == 1:
                i += 2
            else:
                if i+1 < len(flowerbed) and flowerbed[i+1] == 1:
                    i+= 1
                else:
                    available += 1
                    i += 2
        return available >= n