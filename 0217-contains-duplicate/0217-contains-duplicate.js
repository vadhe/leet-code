/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   const hash = {}
   let result = false;
   nums.map((item) => {
     if(Object.hasOwn(hash, item)){
      result = true
     }
     hash[item] = item
   })
   return result;
  //  console.log(hash)
};