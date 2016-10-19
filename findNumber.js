/**
 * Created by LucyQiao on 10/11/16.
 */
function findNumber(num){
    if(num===null || num<7){
        return false;
    }
    var res=[[],[],[]];
    for(var i=7;i<=num;i++){
        if(i%7===0 && i%13!==0){
            res[0].push(i);
        }
        else if(i%13 ===0 && i%7!==0){
            res[1].push(i);
        }
        else if(i%91===0){
            res[2].push(i);
        }
    }

    return res;
}

//console.log(findNumber(100));

function checkNumbers(x) {
    var returnObject = {
        "lucky": [],
        "unlucky": [],
        "whoknows": []
    };
    // your code
    if(x === null || x <7) {
        return false;
    }

    for(var i=7;i<=x;i++){
        if(i%7===0 && i%13!==0){
            returnObject["lucky"].push(i);
        }else if(i%13===0 && i%7!==0){
            returnObject["unlucky"].push(i);
        }else if(i%91===0){
            returnObject["whoknows"].push(i);
        }
    }
    return returnObject;
}

console.log(checkNumbers(4));