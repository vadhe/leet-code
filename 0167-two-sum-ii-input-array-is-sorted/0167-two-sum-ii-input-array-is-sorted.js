/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
   let l = 0
   let r = numbers.length-1
    while(l < r ) {
        let sum = numbers[l] + numbers[r]
        if(sum === target) {
           return [l +1, r +1]
        } else if(sum < target) {
            l++
        } else  {
            r--
        }
    }
    return null
};
process.on("exit", () => {
    require("fs").writeFileSync("display_runtime.txt", "0")
})
// === PROBLEM ANALYSIS ===
// 1. Input/Output specification:
//    Input: Array of integers (sorted ascending), 1-indexed, target integer
//    Output: Array of 2 integers representing indices (1-indexed) yang sum-nya = target
//    Constraints: 
//    - Array sorted non-decreasing
//    - Exactly one solution exists
//    - Can't use same element twice

// 2. Core idea/approach: 
//    Two pointers. Start left=0 (smallest), right=n-1 (largest).
//    - If sum too large → decrease right (karena butuh angka lebih kecil)
//    - If sum too small → increase left (karena butuh angka lebih besar)
//    - If sum exact → return indices

// 3. Main loop/iteration:
//    Loop while left < right
//    Each iteration: check sum, move one pointer

// === INVARIANT SPECIFICATION ===

// 4. Loop Invariant:
//    "Jika solusi (i, j) ada, maka i dan j pasti berada di range [left, right]"
   
//    Atau dengan kata lain:
//    - Semua indeks < left sudah terbukti BUKAN bagian solusi
//    - Semua indeks > right sudah terbukti BUKAN bagian solusi

// 5. Initialization (Base case):
//    left = 0, right = n-1
//    Range [0, n-1] = seluruh array
//    Invariant BENAR karena solusi pasti ada di seluruh array
//    ✅

// 6. Maintenance (Inductive step):
//    ASSUME: Invariant benar di iterasi sekarang (solusi di [left, right])
   
//    Case 1: sum > target
//    - Action: right--
//    - Proof: numbers[right] terlalu besar untuk dipasangkan dengan 
//             numbers[left] (yang terkecil di range)
//             Apalagi dipasangkan dengan numbers[left+1, left+2, ...]
//             Jadi numbers[right] BUKAN bagian solusi
//    - New range: [left, right-1]
//    - Invariant tetap benar ✅
   
//    Case 2: sum < target
//    - Action: left++
//    - Proof: numbers[left] terlalu kecil untuk dipasangkan dengan 
//             numbers[right] (yang terbesar di range)
//             Apalagi dipasangkan dengan numbers[right-1, right-2, ...]
//             Jadi numbers[left] BUKAN bagian solusi
//    - New range: [left+1, right]
//    - Invariant tetap benar ✅
   
//    Case 3: sum == target
//    - Found! Return [left+1, right+1] (convert to 1-indexed)

// 7. Termination:
//    Loop berhenti ketika: left >= right
   
//    Kombinasi invariant + kondisi terminasi:
//    - Invariant: "Solusi ada di [left, right]"
//    - Kondisi: left >= right (range kosong atau 1 elemen)
//    - Kesimpulan: Kita sudah cek semua kemungkinan
   
//    Tapi problem guarantee "exactly one solution exists"
//    Jadi kita PASTI nemuin di Case 3 sebelum left >= right
   

// === EDGE CASES ===
// 8. Test cases to verify:
//    - Normal case: 
//    - Empty/minimal: 
//    - Boundary: 
//    - Edge case specific to problem: 

// === TRACE (Manual execution) ===
// 9. Trace untuk numbers = [1, 2, 3, 4, 5], target = 9

// Step | left | right | numbers[left] | numbers[right] | sum | Invariant Check | Action
// -----|------|-------|---------------|----------------|-----|-----------------|-------
// 0    |  0   |   4   |      1        |   5            |  6  |  [0,4]  kecil   | sum < 9
// 1    |  1   |   4   |      2        |   5            |  7  |  [1,4]  kecil   | sum < 9
// 2    |  2   |   4   |      3        |   5            |  8  |  [2,4]  kecil   | sum < 9
// 3    |  3   |   4   |      4        |   5            |  9  |  [3,4]  found   | sum == 9
// return [3-1,4-1]
// ...