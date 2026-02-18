/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
//     let hash = new Map();
//      for(const v of nums){
//         if(hash.has(v)) {
//            hash.set(v, hash.get(v) +1)
//         } else {
//             hash.set(v, 1);
//         }
//      }
//      let maxKey = null;
// let maxValue = -Infinity;

// for (let [key, value] of hash) {
//     if (value > maxValue) {
//         maxValue = value;
//         maxKey = key;
//     }
// }
// return maxKey
let count = 0;
let candidate
for(const v of nums) {
    if(count === 0) {
        candidate = v;
        count = 1
    } else if (candidate === v) {
        count++
    } else {
        count--
      
    }
}

return candidate
};