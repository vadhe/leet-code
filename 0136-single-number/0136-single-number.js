/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

//     let candidate = new Map()
     let acc = 0;
    for(let i =0;  i< nums.length; i++) {
       acc =  acc ^ nums[i]
    }
    return acc
// return nums.reduce((acc, n) => acc ^ n, 0);


// for (let [key, value] of candidate) {
//     if(value === 1) {
//         return key
//     }
// }
//     return 0
};