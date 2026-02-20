/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let candidate = new Map()
    for(let i =0;  i< nums.length; i++) {
        if(candidate.get(nums[i])) {
            candidate.set(nums[i], candidate.get(nums[i]) + 1)
        } else {
             candidate.set(nums[i],1)
        }
    }
      let re;

    let minKey = null;
let minValue = Infinity;

for (let [key, value] of candidate) {
    if(value === 1) {
        return key
    }
}
    return minKey
};