class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, color: int) -> List[List[int]]:
        if image[sr][sc] == color:
            return image
        self.fill(image, sr, sc, image[sr][sc], color)
        return image
    def fill(self, image, sr, sc, original_color, new_color):
        if sr < 0 or sr >= len(image) or sc < 0 or sc >= len(image[0]):
            return
        if image[sr][sc] != original_color: 
            return

        image[sr][sc] = new_color
        # TOP
        self.fill(image, sr-1, sc, original_color, new_color)
        # BOTTOM
        self.fill(image, sr+1, sc, original_color, new_color)
        # LEFT
        self.fill(image, sr, sc-1, original_color, new_color)
        # RIGHT
        self.fill(image, sr, sc+1, original_color, new_color)
        return image