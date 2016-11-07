/**
 * Created by LucyQiao on 11/6/16.
 */
// Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

// Each number in C may only be used once in the combination.

// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Hide Tags Array Backtracking
// Hide Similar Problems (M) Combination Sum



/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function(candidates, target) {
    var res =[];
    if(candidates===null || candidates.length===0){
        return res;
    }
    var output=[];
    candidates.sort(function(a,b){return a>b?1:-1});
    dfs(candidates,res,output,target,0);
    return res;
};

var dfs = function(candidates,res,output,sum,index){
    //base case:
    if(sum===0){
        res.push(output.slice());
    }
    if(sum<0){
        return;
    }

    //dfs
    for(var i=index;i<candidates.length;i++){
        if(i>index && candidates[i-1]===candidates[i]){
            continue;
        }
        output.push(candidates[i]);
        dfs(candidates,res,output,sum-candidates[i],i+1);
        output.pop();

    }

};