/**
 * Created by LucyQiao on 10/21/16.
 */
/**
 * Example: "student" --> "stuXXt"  (den -> XX)
 *                                   s1     s2
 * Assumption: input, s1, s2 are not null, s1 is not empty
 * */

// What id we do not know the size replationship between s1 and s2?

var charReplacement = function(input,s1,s2){
    //case1: s1.length>s2.length
    //Find every single occurrence of s1 in the original string, and just replace s1 with s2, until we are done.
    var arr = input.split('');
    var res='';
    if(s1.length >= s2.length){
        return replaceShorter(arr,s1,s2,res);

    }else{
        //case2: s1.length<s2.length
        return replaceLonger(arr,s1,s2);
    }
};

var replaceShorter= function(arr,s1,s2,res){
    // we reuse the input char array since the number of characters needed is less.
    var slow = 0, fast =0;
    while(fast < arr.length){
        // when we find a match of s1 on the substring  starting from the fast pointer,
        // we copy the s2 at slow pointer.
        if(fast <= arr.length - s1.length  && equalSubString(arr,fast,s1)){
            copySubString(arr,slow,s2);
            slow = slow + s2.length;
            fast = fast + s1.length;
        }else{
            arr[slow]=arr[fast];
            slow++;
            fast++;
        }
    }
    for(var i=0;i< slow;i++){
        res = res+ arr[i];
    }
    return res;
};

// "student" "den" "XXXX"
//How many extra speces should we get???
var replaceLonger=function(arr,s1,s2,res){
    //step1: count how many times s1 show up in the arr.
    //get all the matches end positions in the input array of string s1.
    var matches = getAllMatches(arr,s1);
    //calculate the new length needed
    var newArr=[];
    newArr[arr.length + matches.length*(s2.length-s1.length)-1]=null;
    //fast and slow pointers both from right to left direction.
    //fast: the position when traversing the new length.
    //slow: the position when traversing the old length.
    //lastIndex: the rightmost matching end position's index
    var lastIndex = matches.length-1;
    var slow = arr.length-1;
    var fast = newArr.length-1;
    while(slow>=0){
        //Only if we still have some match and slow is in the position of rightmost matching end position,
        //we should copy s2.
        if(lastIndex>=0 && slow===matches[lastIndex]){
            copySubString(newArr,fast-s2.length+1,s2);
            fast = fast-s2.length;
            slow = slow-s1.length;
            lastIndex--;
        }else{
            newArr[fast]=arr[slow];
            fast--;
            slow--;
        }
    }

    for(var i=0;i< newArr.length;i++){
        res = res+ newArr[i];
    }
    return res;

}

// check if the substring from fromIndex is the same as s1
var equalSubString = function(arr,fromIndex,s1){
    for(var i=0;i<s1.length;i++){
        if(arr[fromIndex+i]!=s1[i]){
            return false;
        }
    }
    return true;
};

//copy the string s2 to result at fromIndex
var copySubString=function(arr,fromIndex,s2){
    for(var i=0;i<s2.length;i++){
        arr[fromIndex+i]=s2[i];
    }

};

// get all the matches of s1 end positions in input
var getAllMatches=function(arr,s1){
    var matches =[];
    var i=0;
    while(i<=arr.length-s1.length){
        if(equalSubString(arr,i,s1)){
            matches.push(i+s1.length-1);
            i=i+s1.length;
        }else{
            i++;
        }

    }
    return matches;
}


//
console.log(charReplacement("student","den","XXXX"));