/**
 * Created by LucyQiao on 10/24/16.
 */
var findAnagrams = function(s, p) {
    var res = [];
    var sln = s.length;
    var pln = p.length;

    if(sln<pln){
        return res;
    }

    var hash={};
    for(var i=0;i<pln;i++){
        var char=p[i];
        hash[char] = hash[char]||0;
        hash[char]++;
    }
    //sliding window
    //two points, initialize count to p's length
    var slow=0,fast=0,count=pln;
    while(fast<sln){
        //move right everytime, if the character exists in p's hash, decrease the count
        //current hash value >= 1 means the character is existing in p
        if(hash[s[fast++]]-->=1){
            count--;
        }

        //when the count is down to 0, means we found the right anagram
        //then add window's left to result list
        if(count===0){
            res.push(slow);
        }

        //if we find the window's size equals to p, then we have to move left (narrow the window) to find the new match window
        //++ to reset the hash because we kicked out the left
        //only increase the count if the character is in p
        //the count >= 0 indicate it was original in the hash, cuz it won't go below 0
        if(fast-slow===pln && hash[s[slow++]]++>=0){
            count++;
        }

    }
    return res;

};

console.log(findAnagrams("abab","ab"));