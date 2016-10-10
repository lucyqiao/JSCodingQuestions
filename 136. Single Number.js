/**
 * Created by LucyQiao on 10/10/16.
 */
/**Given an array of integers, every element appears twice except for one. Find that single one.*/
/**
 * @param {number[]} nums
 * @return {number}
 */


/*solution1: hashtable   Time:O(n), Space: O(n)*/

var singleNumber = function(nums) {
    var hash ={};
    for(var i=0;i<nums.length;i++){
        var num = nums[i];
        hash[num] = hash[num] || 0;
        hash[num]++;
    }

    for (var k in hash) {
        // use hasOwnProperty to filter out keys from the Object.prototype
        if (hash.hasOwnProperty(k) && hash[k]===1) {
            return parseInt(k);
        }
    }

};