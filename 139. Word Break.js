/**
 * Created by LucyQiao on 10/19/16.
 */
var wordBreak = function(s, wordDict) {
    if(wordDict === null || wordDict.size === 0) {
        return false;
    }
    var canBreak =[];
    for(var k=0;k< s.length;k++){
        canBreak[k]=false;
    }
    //Induction rule: canBreak[i] = OR{(canBreak[j]      AND substring[j+1...i])} is in the dict
    //                                   j=0....i-1
    for(var i=0;i<s.length;i++){
        //no cut,if the word are in the Dict, done
        if(wordDict.has(s.substring(0,i+1))){
            canBreak[i]=true;
            continue;
        }
        //otherwise, check the possible single splits
        for(var j=i-1;j>=0;j--){
            //check the sub-problem and check the rest of the word
            if(canBreak[j] && wordDict.has(s.substring(j+1,i+1))){
                canBreak[i]=true;
                break;
            }

        }
    }

    return canBreak[s.length-1];


};

var s = "a";
var dict = new Set();
dict.add("b");
//dict.add("code");
console.log(wordBreak(s,dict));