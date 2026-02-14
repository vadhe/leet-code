/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
     let stackS = []
     let stackT = []
     for(let i = 0; i < s.length; i++) {
        if(s[i] !== "#"){
            stackS.push(s[i])
        } else {
            stackS.pop()
        }
     }
      
     for(let i = 0; i < t.length; i++) {
        if(t[i] !== "#"){
            stackT.push(t[i])
        } else {
            stackT.pop()
        }
     }
     console.log(`${stackS.join("")} ==== ${stackT.join("")}`)
     return stackS.join("") === stackT.join("")
};

// 1. soal ini pengen mengecek apakah s dan t string sama setelah manghapus empty text
// 2. urutan sebelum ketemu '#'
// 3. -----
// loop s
// stackS = []
// 0 = a apakah bukan '#' iya maka push ke stack ["a"]
// 1 = b apakah bukan '#' iya maka push ke stack ["a", "b"]
// 2 = # apakah bukan '#' tidak makah pop stach ["a"]
// 3 = c apakah bukan '#' iya maka push ke stack ["a", "c"]

// loop t
// stackT = []
// 0 = a apakah bukan '#' iya maka push ke stack ["a"]
// 1 = d apakah bukan '#' iya maka push ke stack ["a", "d"]
// 2 = # apakah bukan '#' tidak makah pop stach ["a"]
// 3 = c apakah bukan '#' iya maka push ke stack ["a", "c"]

// stackS.join("") === stackT.join("")