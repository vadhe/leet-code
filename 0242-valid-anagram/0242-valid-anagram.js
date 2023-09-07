/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 const createHash = (value) => {
 const hash = new Map();
  for (const v of value.replace(/\s/g, '')) {
   if (!hash.has(v)) {
      hash.set(v, 1);
   } else {
      hash.set(v, hash.get(v) + 1);
   }
   }
  return hash;
}
var isAnagram = function(s, t) {
  let result;
  if(s.length !== t.length){
      return result = false;
   }
      const hashs = createHash(s);
   const hasht = createHash(t);
   
   if(hashs.size !== hasht.size){
      return result = false;
   } else {
      for (const [key, value] of hashs){
   if(hasht.has(key)){
      if(hasht.get(key) === value){
        console.log(hasht.get(key) ,value)
         result = true;
      } else {
         return result = false;

      }
      } else {
       
          return result = false;
      
      }
}
   }
   
 return result
};