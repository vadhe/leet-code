/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
     let j = 0;
     let i = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      if (j === needle.length -1) {
        return i - j;
      }
      j++;
      i++;
    } else {
        i = i - j + 1
        j = 0
    }
  }
  return -1;
};
