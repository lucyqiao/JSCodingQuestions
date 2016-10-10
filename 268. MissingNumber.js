/**
 * Created by LucyQiao on 10/10/16.
 */
/**Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

 For example,
 Given nums = [0, 1, 3] return 2.

 Note:
 Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
//solution 1: hash
// Time: O(n), space: O(n)
var missingNumber = function(nums) {
    var hash = {};
    var n = nums.length+1;

    for(var i=0;i<nums.length;i++){
        var num = nums[i];
        hash[num] = hash[num] || 0;
        hash[num]++;
    }

    for(var j=0;j<n;j++){
        if(hash[j] === undefined || hash[j] === 0) {
            return j;
        }
    }

    return n;
};

//solution 2: XOR