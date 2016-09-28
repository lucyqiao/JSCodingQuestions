/**
 * Created by LucyQiao on 9/27/16.
 */
var countPrimes = function(n) {
    // corner case:
    if(n <= 2){
        return 0;
    }
    var isDelete =[];//标记是否被划去

    for(var i=3;i<n;i++){
        if(i%2===0){ //delete 2倍数
            isDelete[i] = true;
        }else{
            isDelete[i] = false;
        }

    }

    //找到之后第一个未被划去的数A
    for(i=3;i<n;i+=2){//跳过2的倍数（已被划去）
        if(!isDelete[i]){
            //在n中，再划去A的倍数
            if(i*i>n){//如果当前素数的平方大于n，跳出循环 （当你要画圈的素数的平方大于 n 时，那么后面没有划去的数都是素数，就不用继续判了）
                break;
            }
            //在n中，划去A的倍数(j)
            for(var j=2;i*j<n;j++){
                isDelete[i*j] = true;
            }
        }
    }

    var count =0;
    for(i=2;i<n;i++){
        if(!isDelete[i]){
            count++;
        }
    }
    return count;
};