/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length -1
  for(let i =0; i <= nums.length -1; i++){
      let mid = Math.round((left + right) / 2);
      if(nums[mid] === target){
          return mid
      }
    if(target > nums[mid]){
       left = mid+1
    } else if(target < nums[mid]) {
       right = mid -1
    } 
  }
  return left;
};