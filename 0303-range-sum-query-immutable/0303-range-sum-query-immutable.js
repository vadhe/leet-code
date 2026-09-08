/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixSums = PrefixSum(nums);
};
var PrefixSum = function(nums) {
    let res = []
    return nums.reduce((acc, curr, index) => {
          if (acc.length === 0) {
             acc.push(0)
          }
          
          acc.push(acc[index] + curr)
         return acc
    },[])

}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    // prefix[right + 1] - prefix[left];
    return this.prefixSums[right + 1] - this.prefixSums[left]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */