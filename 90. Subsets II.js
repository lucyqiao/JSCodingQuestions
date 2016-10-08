/**
 * Created by LucyQiao on 9/29/16.
 */
/**Given a collection of integers that might contain duplicates, nums, return all possible subsets.

 Note: The solution set must not contain duplicate subsets.**/

var subsetsWithDup = function(nums) {
    // sort Array
    nums.sort();
    var res=[];
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
    //state 1: add
    cur.push(nums[index]);
    helper(nums,index+1,cur,res);
    //remove the added element
    cur.pop();
    //skip the duplicates element
    while(index<nums.length-1 && nums[index+1]===nums[index]){
        index++;
    }
    //state2: not add
    helper(nums,index+1,cur,res);
};