"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if not node: return node
        
        # CREATE QUEUE AND ADD NODE FOR BFS
        q = deque([node])
        # CREATE HASHMAP FOR KEEPING TRACK OF CLONED NODES BY NODE VALUE
        clones =  {node.val: Node(node.val, [])}
        while q:
            # POP NODE THAT IS UNVISITED
            cur = q.popleft() 
            # CHECK CLONE HASHMAP FOR CLONE WITH NODE VALUE
            cur_clone = clones[cur.val]

            # ITERATE THROUGH THE UNVISITED NODES NEIGHBORS
            for ngbr in cur.neighbors:
                # IF THE NEIGHBOR NODES HAVE NOT BEEN CLONED
                if ngbr.val not in clones:
                    # CREATE "EMPTY" CLONE OF NEIGHBOR NODE IN HASHMAP
                    clones[ngbr.val] = Node(ngbr.val, [])
                    # APPEND NEIGHBOR NODE TO QUEUE TO VISIT LATER
                    q.append(ngbr)
                # ADD TO CURRENT CLONE OF NODE ALL THE NEIGHBOR NODES THRU HASHMAP
                cur_clone.neighbors.append(clones[ngbr.val])
                
        return clones[node.val]