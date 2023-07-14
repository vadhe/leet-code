/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashmap = {}; // {3:0} []
    const result = [];//[0,1]
    nums.map((value, index) => {
      const difference = target - value; //3
       if(hashmap.hasOwnProperty(difference)){
          result.push(hashmap[difference], index)
        console.log(hashmap)
        // console.log(hashmap[`${nums[index-1]}`])
        //   result.push(hashmap[`${nums[index-1]}`], index)
        }        
       hashmap[value] = index 
    })
    return result;
};