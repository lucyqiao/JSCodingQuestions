/**
 * Created by LucyQiao on 10/19/16.
 */
/*Given a string S, find the longest palindromic substring in S.
You may assume that the maximum length of S is 1000,
and there exists one unique longest palindromic substring.*/

var longestPalindrome = function(s) {
    //这个方法其实很直观，就是从头扫描到尾部，每一个字符以它为中心向2边扩展，扩展到不能扩展为止（有不同的字符），返回以每一字符为中心的回文，然后不断更新最大回文并返回之。
    if(s===null || s.length===0){
        return s;
    }
    var res ='';
    var max =0;
    for(var i=0;i<s.length;i++){
        var s1 = getLongest(s,i,i);
        var s2 = getLongest(s,i,i+1);

        if(s1.length>max){
            max = Math.max(max,s1.length);
            res= s1;
        }

        if(s2.length>max){
            max = Math.max(max,s2.length);
            res= s2;
        }
    }
    return res;
};

var getLongest = function(s,left,right){
    while(left>=0 && right<s.length){
        if(s[left]!==s[right]){
            break;
        }
        left--;
        right++;
    }

    return s.substring(left+1,right);
};