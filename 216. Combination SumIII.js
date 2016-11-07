/**
 * Created by LucyQiao on 11/6/16.
 */
/**
 * Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.


 Example 1:

 Input: k = 3, n = 7

 Output:

 [[1,2,4]]

 Example 2:

 Input: k = 3, n = 9

 Output:

 [[1,2,6], [1,3,5], [2,3,4]]
 Credits:
 Special thanks to @mithmatt for adding this problem and creating all test cases.

 Hide Tags Array Backtracking
 Hide Similar Problems (M) Combination Sum
 */
var combinationSum3 = function(k, n) {
    var res=[];
    var output=[];
    dfs(k,n,res,output,1);
    return res;
};

var dfs = function(k,n,res,output,index){
    //basecase:
    if(output.length>k){
        return;
    }
    if(output.length===k && n===0){
        res.push(output.slice());
        return;
    }

    for(var i=index;i<=9;i++){
        if(n-i>=0){
            output.push(i);
            dfs(k,n-i,res,output,i+1);
            output.pop();
        }

    }
};

console.log(combinationSum3(3,7));