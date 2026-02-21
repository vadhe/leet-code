/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = (l1, l2) => {
  const result = new ListNode();
  let current = result;
  let carry  = 0
  while (l1 || l2 || carry) {
    // if (l2) {
    //    let vl = l1.val + l2.val + carry
    //    carry = Math.floor(vl / 10); 
    //    current.next = new ListNode(vl % 10, null);
    //  
    // } else {
    //     let vl = l1.val  + carry
    //    carry = Math.floor(vl / 10); 
    //    current.next = new ListNode(vl % 10, null);
    // }
      let v1;
      let v2;
    if (l1) {
        v1 = l1.val
        l1 = l1.next
    } else {
        v1 = 0
    }

    if (l2) {
        v2 = l2.val
        l2 = l2.next
    } else {
        v2 = 0
    }
    let vl = v1 + v2 + carry
    carry = Math.floor(vl / 10); 
    current.next = new ListNode(vl % 10, null);
    current = current.next;
    
    
  }
  return result.next;
};