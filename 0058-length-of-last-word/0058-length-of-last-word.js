/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // let arr = s.split(" ").filter((i) => i !== "")
    // return arr[arr.length -1].length
    // let l = 0;
    // for(let i = s.length -1; i >= 0; i --){
    //   if (l > 0 && s[i] === ' '){
    //      return l
    //   } 
     
    // }
    // return l
    let l =  0
    let i = s.length -1

    while(i >= 0) {
       if(l > 0 && s[i] === ' '){
         return l
       } else if(l > 0 || s[i] !== " ") {
         l++
       }
       i--
    }
    return l
};