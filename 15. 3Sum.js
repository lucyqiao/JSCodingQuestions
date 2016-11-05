/**
 * Created by LucyQiao on 11/4/16.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var res=[];
    //step1:check corner case
    if(nums===null || nums.length<3){
        return res;
    }
    //step2: sort array
    nums.sort(function(a,b){return a>b ? 1 : -1;});
    //step3: two pointer  -- skip duplicate
    //i<j<k
    //nums[i]+nums[j]+nums[k]==target
    for(var i=0;i<nums.length-2;i++){
        //skip duplicates
        if(i>0 && nums[i]===nums[i-1]){
            continue;
        }

        var left = i+1;
        var right = nums.length-1;

        while(left<right){
            var temp = nums[left]+nums[right]
            if(temp+nums[i]===0){
                var list=[nums[i],nums[left],nums[right]];
                res.push(list);
                left++;

                //skip duplicate j
                while(left<right && nums[left]===nums[left-1]){
                    left++;
                }
            }else if(temp+nums[i]>0){
                right--;
            }else{
                left++;
            }
        }
    }
    return res;
};