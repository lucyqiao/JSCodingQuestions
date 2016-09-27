/**
 * Created by LucyQiao on 9/26/16.
 */
//input: abc_def_ghi
//arr: ['abc','def','ghi']

var convertToCamel = function(str){
    if(str === null||str.length ===0){
        return str;
    }
    var arr= str.split("_"); //convert to array

    for(var i =1;i<arr.length;i++){

        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
    }

    var res = arr.join('');

    return res && res.charAt(0).toLowerCase() + res.substring(1); // convert first letter of string to lowerCase

}

console.log(convertToCamel("abc_def__ghi")); // "abcDefGhi"
console.log(convertToCamel("abc_def__ghi_"));//"abcDefGhi"
console.log(convertToCamel("abc_def__ghi__")); //"abcDefGhi"
console.log(convertToCamel("__abc_def__ghi")); //"abcDefGhi"

