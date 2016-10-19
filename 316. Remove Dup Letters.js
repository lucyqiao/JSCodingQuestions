/**
 * Created by LucyQiao on 10/18/16.
 */
/**
 * Given a string which contains only lowercase letters,
 * remove duplicate letters so that every letter appear once and only once.
 * You must make sure your result is the smallest in lexicographical order among all possible results.

 Example:
 Given "bcabc"
 Return "abc"

 Given "cbacdcbc"
 Return "acdb"*/

var removeDuplicateLetters = function(s) {
    //res[]: contain the occurences of the character (i+'a')
    var charCodeA ='a'.charCodeAt(0);//97
    var res ={};
    //visited[]:contain if character (i+'a') is present in current result Stack
    var visited ={};
    //var ch = s.split("");
    //count number of occurences of character
    var i;
    for(i=0;i<26;i++){
        res[String.fromCharCode(i+charCodeA)]=0;
    }
    for(i=0;i< s.length;i++){
        res[s[i]]++;
    }

    var stack=[];
  for(i=0;i< s.length;i++){
      //decrement number of characters remaining in the string to be analysed
      res[s[i]]--;
      //if character is already present in stack, dont bother
      if(visited[s[i]]){
          continue;
      }
      //if current character is smaller than last character in stack which occurs later in the string again
      //it can be removed and  added later e.g stack = bc remaining string abc then a can pop b and then c
      while(stack.length!==0 && s[i] < stack[stack.length - 1] && res[stack[stack.length - 1]]>0){
          visited[stack.pop()]=false;
      }

      //add current character and mark it as visited
      stack.push(s[i]);
      visited[s[i]]=true;

  }
    return stack.join('');
};
console.log(removeDuplicateLetters("bcabc"));