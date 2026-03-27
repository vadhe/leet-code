/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode()
    dummy.next = head
    let curr = dummy
    let prev = curr
    while(prev.next && prev.next.next){
        let node1 = prev.next
        let node2 = prev.next.next
        prev.next =  node2
        node1.next = node2.next
        node2.next = node1
        // node2.next = node1
        // node1.next = prev.next.next.next
        prev = prev.next.next
    }
    return dummy.next
};

// fast = 2
// slow = 1
// slow.next = fast 
// fast.next = slow


// [1,2]
// slow =  node 1
// fast = node 2
// fast.next = slow
// slow.next = null
// harusnya [2,1]