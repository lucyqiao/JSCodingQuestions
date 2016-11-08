/**
 * Created by LucyQiao on 11/7/16.
 */
/**Follow up for "Unique Paths":

 Now consider if some obstacles are added to the grids. How many unique paths would there be?

 An obstacle and empty space is marked as 1 and 0 respectively in the grid.

 For example,
 There is one obstacle in the middle of a 3x3 grid as illustrated below.

 [
 [0,0,0],
 [0,1,0],
 [0,0,0]
 ]
 The total number of unique paths is 2.

 Note: m and n will be at most 100.*/
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid===null || obstacleGrid.length===0 || obstacleGrid[0].length===0){
        return 0;
    }
    var m=obstacleGrid.length;
    var n=obstacleGrid[0].length;
    var dp =obstacleGrid.slice();
    dp[0][0]=obstacleGrid[0][0]===1?0:1;
    for(var i=1;i<m;i++){
        if(obstacleGrid[i][0]===1){
            dp[i][0]=0;
        }else if(dp[i-1][0]===0){
            dp[i][0]=0;
        }else{
            dp[i][0]=1;
        }
    }

    for(var j=1;j<n;j++){
        if(obstacleGrid[0][j]===1){
            dp[0][j]=0;
        }else if(dp[0][j-1]===0){
            dp[0][j]=0;
        }else{
            dp[0][j]=1;
        }
    }

    for(i=1;i<m;i++){
        for(j=1;j<n;j++){

            dp[i][j]=obstacleGrid[i][j]===1?0:dp[i][j-1]+dp[i-1][j];
        }
    }

    return dp[m-1][n-1];

};