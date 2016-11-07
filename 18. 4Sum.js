/**
 * Created by LucyQiao on 11/5/16.
 */
var fourSum = function(nums, target) {
    var res=[];
    if(nums.length<4){
        return res;
    }

    nums.sort(function(a,b){return a>b?1:-1});
    for(var i=0;i<nums.length-3;i++){
        //skip
        if(i>0 && nums[i] == nums[i-1]) continue;
        for(var j=i+1;j<nums.length-2;j++){
            //skip
            if(j>i+1 && nums[j] == nums[j-1]) continue;
            var left = j+1, right = nums.length-1;
            while(left<right){
                var newTarget=target-nums[i]-nums[j];
                var sum = nums[left]+nums[right];
                if(sum===newTarget){
                    var list =[nums[i],nums[j],nums[left],nums[right]];
                    res.push(list);
                    while(left<right && nums[left+1]===nums[left]){left++;}
                    while(left<right && nums[right-1]===nums[right]){right--;}
                    left++;
                    right--;
                }else if(sum>newTarget){
                    right--;
                }else{
                    left++;
                }
            }

        }
    }

    return res;
};