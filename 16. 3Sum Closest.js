/**
 * Created by LucyQiao on 11/4/16.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // corner case:
    if(nums===null || nums.length<3){
        return null;
    }

    //step1: sort array
    nums.sort(function(a,b){return a>b ?1:-1;});

    var ans = nums[0]+nums[1]+nums[2];
    //step2:two pointer
    for(var i=0;i<nums.length-2;i++){
        //去重：
        if(i>0 && nums[i]===nums[i-1]){
            continue;
        }
        var left = i+1;
        var right = nums.length-1;
        while(left<right){
            var sum = nums[i]+nums[left]+nums[right];
            if(Math.abs(target-ans)>Math.abs(target-sum)){
                ans=sum;
                if(ans===target){
                    return ans;
                }
            }

            sum>target ? right--: left++;

        }
    }
    return ans;
};