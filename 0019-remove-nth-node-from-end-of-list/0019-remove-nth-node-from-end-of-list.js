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
    
    // let curr = head
    // let arr = []
    // while(curr) {
    //     arr.push(curr.val)
    //     curr = curr.next
    // }
    // arr.splice(arr.length - n, 1)
    // let header = new ListNode(0)
    // let penunjuk = header; 
    // for(const v of arr) {
    //     while(penunjuk.next){
    //         penunjuk = penunjuk.next
    //     }
    //     penunjuk.next = new ListNode(v, null)
    //     console.log(header.val)
    // }

    // console.log(header)
    // return header.next

    const dummy = new ListNode(0, null)
    dummy.next = head 
    let fast = dummy
    let slow = dummy
    for(let i = 0; i < n; i++) {
        fast = fast.next
    }
    while(fast.next) {
        fast = fast.next
        slow = slow.next
    }
    let temp = slow.next.next
    slow.next = temp
    return dummy.next

};

// [1,2,3,4,5]
// dummy -> 0 [1,2,3,4,5]

// start 
// fast = head.next.next = 2
// slow = head.next = 0
// while
// fast = head.next ---> = 3
// slow = head.next --> 1
// fast = head.next ---> = 4
// slow = head.next --> 2
// fast = head.next ---> = 5
// slow = head.next --> 3
// bingung selanjutnya gmn soalnya fast udah di terrakhir

