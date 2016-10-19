/**
 * Created by LucyQiao on 10/10/16.
 */
/**For example,
 Given s = "the sky is blue",
 return "blue is sky the".*/

/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */

// Solution: two pointers Time: O(2n)=O(n), space: O(1)
var reverseWords = function(str) {
    var arr = str;
    reverse(arr,0,arr.length-1);
    var last=0;

    for(var i=0;i<=arr.length;i++){
        if(arr[i]===' '||i===arr.length){
            reverse(arr,last,i-1);
            last=i+1;
        }
    }
};

var reverse = function(arr,left,right){
    while(left<right){
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

}