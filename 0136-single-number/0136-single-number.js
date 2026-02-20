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
//     console.log(candidate)
//     for (const entry of candidate) {
//      if (re === undefined) {
//         re = entry
//      } else if (entry = )
// }

    let minKey = null;
let minValue = Infinity;

for (let [key, value] of candidate) {
    if (value < minValue) {
        minValue = value;
        minKey = key;
    }
}
    return minKey
};