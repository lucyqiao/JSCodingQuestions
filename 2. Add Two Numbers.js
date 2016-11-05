/**
 * Created by LucyQiao on 11/4/16.
 */
// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

//  Amazon Microsoft Bloomberg Airbnb Adobe

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//corner case:
//1. l1=[0,1],l2=[0,1,2]
//2. l1=[]. l2=[0,1]
//3. l1=[9,9], l2=[1]

// value reverse helps to asslign the first digit or both linklist
var addTwoNumbers = function(l1, l2) {
    var dummyHead = new ListNode(0);
    var p = l1, q=l2, curr=dummyHead;
    var carry = 0;

    while(p!==null||q!==null){
        var x = (p!==null)? p.val:0;
        var y = (q!==null)? q.val:0;
        var sum = x+y+carry;

        if(sum>9){
            carry=1;
            sum=sum%10;
        }else{
            carry=0;
        }

        curr.next = new ListNode(sum);
        curr=curr.next;
        if(p!==null){
            p=p.next;
        }
        if(q!==null){
            q=q.next;
        }
    }

    if(carry>0){
        curr.next = new ListNode(1);
    }

    return dummyHead.next;
};