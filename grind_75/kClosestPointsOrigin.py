import heapq

class Solution:
    def kClosest(self, points: List[List[int]], K: int) -> List[List[int]]:
        
        heap = []
        
        for (x, y) in points:
            # CALCULATE THE DISTANCE AND KEEP IT NEGATIVE TO KEEP "LONGEST DISTANCE" AT TOP OF HEAP
            dist = -(x*x + y*y)
            # IF HEAP HOLDS K AMOUNT OF POINTS, REMOVE THE LOWEST(NEGATIVE DISTANCE) AND ADD NEW DISTANCE
            if len(heap) == K:
                heapq.heappushpop(heap, (dist, x, y))
            # ADD DISTANCE TO HEAP
            else:
                heapq.heappush(heap, (dist, x, y))
        
        return [(x,y) for (dist,x, y) in heap]