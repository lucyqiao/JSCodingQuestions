/**
 * Created by LucyQiao on 9/27/16.
 */
/** Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.*/

var removeDuplicates = function(nums) {
    if(nums === null || nums.length<=1){
        return nums;
    }
    var slow = 0, fast = 1;
    while(fast<nums.length){
        if(nums[fast]!=nums[fast-1]){
            nums[++slow]=nums[fast];
        }
        fast++;
    }

    return slow+1;
};