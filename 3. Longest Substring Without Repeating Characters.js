/**
 * Created by LucyQiao on 10/24/16.
 */
/*
 “BDEFGADE”  ⇒ “BDEFGA”, whose size is 6.


 sliding window: it represents the current sub-string to consider satisfy the restrictions(contains all unique letters)
 case1: when to move fast:
 when there is no duplicate found, and after each step, we update the global_max if necessary.
 case2: when to move slow pointer?
 where there is no duplicate found. do not have to update global_max.


 BDEFGADE
 ------------
 s           f
 global_max=6

*/
//Time complexity: O(2n)
var lengthOfLongestSubstring = function(s) {
    if(s===null || s.length===0){
        return 0;
    }

    var map={};
    var maxlen=0;
    var slow=0,fast=0;

    //scan from left to right
    while(fast<s.length){
        var c = s[fast];

        //case1: dupicate found
        if(map[c]!==undefined && map[c]>=1){
            map[c]++;
            while(map[c]>1){
                map[s[slow]]--;
                slow++;
            }
        }else{//case 2: no duplicated
            map[c]=1;
            maxlen=Math.max(maxlen,fast-slow+1);

        }
        fast++;
    }
    return maxlen;
};

console.log(lengthOfLongestSubstring("pwwkew"));