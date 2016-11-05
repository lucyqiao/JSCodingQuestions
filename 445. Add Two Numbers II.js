/**
 * Created by LucyQiao on 11/4/16.
 */
/**
Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
 **/

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
var addTwoNumbers = function(l1, l2) {
    //push l1,l2 into stack 1, stack2
    var stack1 = [];
    var stack2 = [];
    while(l1!==null){
        stack1.push(l1.val);
        l1=l1.next;
    }
    while(l2!==null){
        stack2.push(l2.val);
        l2=l2.next;
    }

    var node = new ListNode(0);
    var carry =0;
    while(stack1.length!==0 || stack2.length!==0){
        var x = (stack1.length!==0)? stack1.pop():0;
        var y = (stack2.length!==0)? stack2.pop():0;
        var sum = x+y+carry;
        if(sum>9){
            carry =1;
            sum = sum%10;
        }else{
            carry=0;
        }

        node.val = sum;
        var head = new ListNode(carry);
        head.next = node;
        node = head;
    }

    return node.val===0? node.next:node;

};