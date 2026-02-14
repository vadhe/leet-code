import "fmt"
func isAnagram(s string, t string) bool {
    freq := make(map[rune] int)
   
    if len(s) != len(t) {
        return false
    }
    for i,v := range s {
        freq[v]++
        freq[rune(t[i])]--  
    }
     
    for _, value := range freq {
        if( value != 0){
            return false
        }
    }
    return true
}