/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const convert = convertArray(nums)
    const prefix = PrefixSum(convert)
    let maxLength = 0;
    const map = new Map();
    prefix.map((item, index) => {
        if(map.has(item)) {
            if (maxLength < index - map.get(item)) {
                maxLength = index - map.get(item)
            }
        //    map.set(item, index);
        } else {
            map.set(item, index)
        }
        
    })
    return maxLength
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
var convertArray = (data) => {
  const result = []
  data.map((item) => {
    if(item === 0) {
      result.push(-1)
    } else {
      result.push(1)
    }
  })
  return result
}