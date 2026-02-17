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
var deleteDuplicates = function(head) {
    // let dummy = new ListNode()
    // let tail = dummy

    // while(head){
    //    let prev = head
    //    head= head.next
    //    if(head) {
    //     if(head.val === prev.val){
    //        console.log(head.next, prev.next)
    //      }
    //    }
    // // 
    // }

    let current = head 
    while(current !== null && current.next !== null){
        if(current.val === current.next.val){
            current.next = current.next.next
        } else {
            current = current.next 
        }
    }

    return head
    
};

/*

ListNode {
  val: 1,
  next: ListNode { val: 1, next: ListNode { val: 2, next: null } }
}

*/