/**
 * Created by LucyQiao on 11/7/16.
 */
/**Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

 Note: You can only move either down or right at any point in time.

 Hide Tags Array Dynamic Programming
 Hide Similar Problems (M) Unique Paths (H) Dungeon Game
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid===null||grid.length===0||grid[0].length===0){
        return 0;
    }
    var rows=grid.length;
    var cols=grid[0].length;

    var dp=grid.slice();
    for(var i=1;i<rows;i++){
        dp[i][0]=grid[i][0]+dp[i-1][0];
    }
    for(var j=1;j<cols;j++){
        dp[0][j]=grid[0][j]+dp[0][j-1];
    }
    for(i=1;i<rows;i++){
        for(j=1;j<cols;j++){
            var sum1=dp[i-1][j];
            var sum2=dp[i][j-1];
            dp[i][j]=Math.min(sum1,sum2)+grid[i][j];
        }
    }
    return dp[rows-1][cols-1];
};