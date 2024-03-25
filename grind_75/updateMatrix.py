class Solution:
    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        m, n = len(mat), len(mat[0])
        # RIGHT, BOTTOM, LEFT, TOP
        DIR = [(0,1), (1,0), (0,-1), (-1,0)]

        q = deque([])
        for r in range(m):
            for c in range(n):
                if mat[r][c] == 0:
                    q.append((r, c))
                else:
                    mat[r][c] = -1  # Marked as not processed yet!

        while q:
            r, c = q.popleft()
            for a,b in DIR:
                # CHECKS FOR ADJACENT INDICES LOOPING THRU DIR
                nr,nc = a+r, b+c
                # IF ADJACENT INDICE IS OUT OF BOUND OR PROCESSED CONTINUE ON TO NEXT ADJACENT INDICE
                if nr < 0 or nr == m or nc < 0 or nc == n or mat[nr][nc] != -1: continue
                # IF ADJACENT INDICE IS NOT PROCESSED(1 IN THE MATRIX), 
                # ADD 1 TO ORIGINAL DISTANCE AND APPLY TO UNPROCESSED ADJACENT INDICE
                mat[nr][nc] = mat[r][c] + 1
                # ADD PROCESSED ADJACENT INDICE TO QUEUE TO REPREAT PROCESS. THIS IS WHAT WILL ALLOW THE DISTANCE TO KEEP ON ACCUMULATING
                q.append((nr, nc))
        return mat
