class NumArray:

    def __init__(self, nums: List[int]):
        self.nums = nums  

    def sumRange(self, left: int, right: int) -> int:
        prefix = [0]
        for item in self.nums:
            prefix.append(prefix[len(prefix) -1] + item)
        return prefix[right+1] - prefix[left]

# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)