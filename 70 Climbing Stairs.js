/**
 * Created by LucyQiao on 9/27/16.
 */
var climbStairs = function(n) {
    //base case:
    if(n <= 2){
        return n;
    }
    var M = [];
    M[0] = 0;
    M[1] = 1;
    M[2] = 2;

    for(var i=3;i<=n;i++){
        M[i] = M[i-1] + M[i-2];
    }

    return M[n];

};