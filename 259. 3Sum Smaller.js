/**
 * Created by LucyQiao on 11/5/16.
 */
/**Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

 For example, given nums = [-2, 0, 1, 3], and target = 2.

 Return 2. Because there are two triplets which sums are less than 2:

 [-2, 0, 1]
 [-2, 0, 3]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    var res = 0;
    if(nums.length<3){
        return res;
    }

    nums.sort(function(a,b){return a>b?1:-1});

    for(var i=0;i<nums.length-2;i++){
        var left = i+1;
        var right = nums.length-1;
        while(left<right){
            if(nums[i]+nums[left]+nums[right]<target){
                res+=right-left;
                left++;
            }else{
                right--;
            }
        }

    }
    return res;
};

console.log(threeSumSmaller([-2,0,1,3],2));