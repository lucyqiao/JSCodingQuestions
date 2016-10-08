/**
 * Created by LucyQiao on 9/29/16.
 */
// Given a set of distinct integers, nums, return all possible subsets.

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,3], a solution is:

// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

//O(2^n)

var subsets = function(nums) {
    var res = [];
    helper(nums,0,[],res);
    return res;
};

var helper = function(nums,index,cur,res){
    //base case:
    if(index === nums.length){
        res.push(cur.slice());
        return;
    }

    //recursive rule:
    //state1: not add
    helper(nums,index+1,cur,res);
    //state2: add
    cur.push(nums[index]);
    helper(nums,index+1,cur,res);
    // remove the added element when back tracking to the pervious
    cur.pop();

}