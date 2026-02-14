/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
   const hash = new Set()
   
    nums.forEach((el) => {
        hash.add(el)
    })
   let lengthh =0;
 for(let num of hash) {
    let start;
    let count = 0;
    if (!hash.has(num-1)){ 
       start = num
    }
    while(hash.has(start+count)){
        count++
        if(count > lengthh){
          lengthh = count
        }
    }
    
  }
  return lengthh
  
  
};