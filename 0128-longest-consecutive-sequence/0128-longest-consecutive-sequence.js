/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function(nums) {
    let hashSet = new Set(nums)
    nums.forEach((el) => {
        hashSet.add(el)
    })
    let length = 0;
    for (const v of hashSet){
        let start;
        let count = 0;
        if(!hashSet.has(v - 1)){
           start = v
        }
        while(hashSet.has(start + count)){
            count++
            if(count > length) {
                length = count
            }
        }
    }
   return length
};


// [100,4,200,1,3,2]
// start = 100 apakah ada 101 tidak 
// hash  = {4, 3, 2}
// curr = 100 -1 = 99

// curr 4 -1 = 3
// curr 200 -1 = 199
// curr 1 -1 = 0
// curr 3- 1 = 2
// curr 2 -1 = 1