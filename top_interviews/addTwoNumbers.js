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


/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
var addTwoNumbers = function(l1, l2) {
    let runnerOne = l1
    let runnerTwo = l2
    let numString1 = ''
    let numString2 = ''
    while(runnerOne != null || runnerTwo != null){
        numString1 += runnerOne.val
        runnerOne = runnerOne.next
    }
    while(runnerTwo != null){
        numString2 += runnerTwo.val
        runnerTwo = runnerTwo.next
    }
    let num1 = numString1.split("").reverse().join("")
    let num2 = numString2.split("").reverse().join("")
    num1 = BigInt(num1)
    num2 = BigInt(num2)
    let answer = num1 + num2 + ""

    let numArr = answer.split("").reverse()
    let answerList = new ListNode(numArr[0])
    let temp = answerList
    for(let i = 1; i < numArr.length; i++){
        temp.next = new ListNode(numArr[i])
        temp = temp.next
    }
    return answerList
};

var addTwoNumbers = function(l1, l2) {
    let node = null
    const carry = arguments[2]
    if (l1 || l2) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        const next1 = l1 ? l1.next : null
        const next2 = l2 ? l2.next : null
        const val = carry ? val1 + val2 + 1 : val1 + val2
        node = new ListNode(val % 10)
        node.next = addTwoNumbers(next1, next2, val >= 10)  
    } else if (carry) {
        node = new ListNode(1)
        node.next = null
    }
    return node
};