/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curr = head
    let arr = []
    while(curr) {
        arr.push(curr.val)
        curr = curr.next
    }
    arr.splice(arr.length - n, 1)
    let header = new ListNode(0)
    let penunjuk = header; 
    for(const v of arr) {
        while(penunjuk.next){
            penunjuk = penunjuk.next
        }
        penunjuk.next = new ListNode(v, null)
        console.log(header.val)
    }

    console.log(header)
    return header.next
};