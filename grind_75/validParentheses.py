class Solution:
    def isValid(self, s: str) -> bool:
        paren_dict = {
            "]":"[",
            "}":"{",
            ")":"("
        }
        paren_stack = []
        for i in range(len(s)):
            parentheses = s[i]
            if parentheses not in paren_dict:
                paren_stack.append(parentheses)
            else:
                if len(paren_stack) > 0 and paren_stack[-1] == paren_dict[parentheses]:
                    paren_stack.pop()
                    continue
                else:
                    return False
        return True if len(paren_stack) == 0 else False