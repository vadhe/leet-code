/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   const string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//    if(string.match(/[^a-zA-Z]/g)){
//     return false
//    }
   let L = 0
   let R = string.length -1
   while(L < R) {
    console.log(`${string[L].toLowerCase()} ---- ${string[R]} -------${string[L] !== string[R]}`)
     if(string[L] !== string[R]){
        return false
     }
     L++
     R--
   }
   return true
}