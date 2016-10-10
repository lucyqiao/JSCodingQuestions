/**
 * Created by LucyQiao on 10/10/16.
 */
/**
 * @param {number[]} height
 * @return {number}
 */

/*
 设置两个指针i, j, 一头一尾, 相向而行. 假设i指向的挡板较低, j指向的挡板较高(height[i] < height[j]).
 下一步移动哪个指针?
 -- 若移动j, 无论height[j-1]是何种高度, 形成的面积都小于之前的面积.
 -- 若移动i, 若height[i+1] <= height[i], 面积一定缩小; 但若height[i+1] > height[i], 面积则有可能增大.
 综上, 应该移动指向较低挡板的那个指针.
 */

https://leetcode.com/articles/container-most-water/#approach-2-two-pointer-approach-accepted

// Time O(n), Space O(1)

var maxArea = function(height) {
    var maxArea =0, left = 0, right = height.length-1;
    while(left < right) {
        maxArea = Math.max(maxArea,(right-left)* Math.min(height[left],height[right]));
        //谁小移谁
        if(height[left]<height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
};