/**
 * Created by LucyQiao on 11/3/16.
 */
//[2,3,7] --> [2,3,8]

var plusOne = function(digits) {
    var i = digits.length-1;
    while(i>=0){
        if(digits[i]!==9){
            digits[i]++;
            return digits;
        }else{
            digits[i]=0;
            i--;
        }
    }
    digits.unshift(1);
};