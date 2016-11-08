/**
 * Created by LucyQiao on 11/7/16.
 */
/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

 The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

 How many possible unique paths are there?
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //DP
    if(m===0 || n===0){
        return 0;
    }
    var dp=[[1]];
    for(var i=1;i<m;i++){
        dp.push([]);
        dp[i][0]=1;
    }
    for(var j=1;j<n;j++){
        dp[0][j]=1;
    }

    for(i=1;i<m;i++){
        for(j=1;j<n;j++){
            dp[i][j]=dp[i][j-1]+dp[i-1][j];
        }
    }
    return dp[m-1][n-1];
};