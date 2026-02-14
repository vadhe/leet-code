/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if(word.length < 3) {
        return false
    }
   let contain = false;
    let vowels = 'aeiouAEIOU'
    let y = false
    let c = false
    for(let i= 0; i < word.length; i++) {
        let w = word[i]
         
        if (!isNaN(w)){
          if (Number(w) >= 0 && Number(w) <= 9) {        
            contain = true
          }
        } else {
           if (vowels.split("").includes(w)) {
             y = true
           } else {
             c = true
           }
           if (w.charCodeAt(0) >= 65 && w.charCodeAt(0) <= 122){ 
             contain = true
           } else {
              return false
           }
        }
    }
        return contain && y && c
  
};
