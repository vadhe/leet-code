/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const hash = {
        I : 1,
        V: 5,
        X:10,
        L : 50,
        C:100,
        D:500,
        M:1000,
    }
    let total = 0
    for(let i =0; i < s.length; i++) {
      if(hash[s[i]]< hash[s[i+1]]){
          total -= hash[s[i]]
         } else {
             total += hash[s[i]]
         } 
    }
    return total
}

