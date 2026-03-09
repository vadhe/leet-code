function findClosestNumber(nums: number[]): number {
    let candidate= nums[0];
    for (const val of nums.slice(1)) {
        if(Math.abs(val) < Math.abs(candidate)){
            candidate = val
        } 
        if(Math.abs(val) === Math.abs(candidate)) {
            candidate = Math.max(val, candidate)
        }
    }
    return candidate
};


// candidate = null
// candidate = -4
// apakah -2(2) < -4(4)  maka candidate = 2
// apakah 1 < -2(2) maka candidate = 1
// apakah 1 < 4, maka candidate = 1
// apakah 1 < 8,maka candidate = 1


// candidate = null
// candidate = 2
// apakah -1(1) < 2  maka candidate = 1
// apakah 1 < -1(1) maka candidate = 1
// apakah 1 n === n -1(1) maka candidate = fungsi balikin angka tervesar dari 2 parameter 
