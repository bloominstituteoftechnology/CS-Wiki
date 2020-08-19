"""
https://leetcode.com/problems/sqrtx/

Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.

"""
# Binary Search 

class Solution:
    """
    x = 16
    [0, x]
    
    """

  def mySqrt(self, x: int) -> int:
        min, max = 0, x
        res = 0
        while min <= max:
            mid = int((min + max) / 2)
            squared = mid * mid
            if squared == x:
                return mid
            elif squared > x:
                max = mid - 1
            else:
                min = mid + 1
                res = mid
        return res

print(mySqrt)
  

# Brute Force

# class Solution:
#     def mySqrt(self, x: int) -> int:
#         for i in range(0, x + 1):
#             squared = i * i
#             if squared == x:
#                 return i
#             elif squared > x:
#                 return i -1
#         return -1
 