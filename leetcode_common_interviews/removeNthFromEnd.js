/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * SOLUTION FOR DOUBLE PASS
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let length = 0;
    let runner = head;

    while (runner) {
        length++
        runner = runner.next
    }

    if (length === 1 && n === 1) return head.next = null
    if (length === n) return head = head.next

    runner = head;
    let stop = length - n - 1
    while (stop != 0) {
        stop--
        runner = runner.next
    }
    runner.next = runner.next.next
    return head
};



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * SOLUTION FOR SINGLE PASS
 * 
 * CREATE TWO POINTERS WITH THE DISTANCE OF n, MOVE BOTH POINTERS TO THE END
 * AND NOW THE SLOW POINTER SHOULD BE n NODES BEHIND THE FAST POINTER
 */


var removeNthFromEnd = function (head, n) {
    let fast = head
    let slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next
    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
};