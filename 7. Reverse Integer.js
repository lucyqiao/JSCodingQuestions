/**
 * Created by LucyQiao on 10/20/16.
 */
/**Reverse digits of an integer.

 Example1: x = 123, return 321
 Example2: x = -123, return -321*/

var reverse = function(x) {
    var isNeg= x<0;
    var res =0;
    x = Math.abs(x);

    while(x){
        var lastDigit = x%10;
        res *=10;
        res += lastDigit;
        x=parseInt(x/10);
    }

    res = isNeg === false ? res: -res;
    if(res> Math.pow(2,31)-1 ||  res<-Math.pow(2,31)){
        return 0;
    }

    return res;
};