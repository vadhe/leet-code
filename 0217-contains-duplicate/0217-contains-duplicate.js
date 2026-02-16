/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let seen = new Set()
    // for(let i=0; i< nums.length; i++){
    //     console.log("ok",seen)
    //     if(seen.has(nums[i])){
    //         return true
    //     }
    //     seen.add(nums[i], nums[i]);
    // }
    for (const num of nums) {
     if (seen.has(num)) {
       return true;
     }
     seen.add(num);
   }
    return false
};

