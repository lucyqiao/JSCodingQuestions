/**
 * Created by LucyQiao on 10/7/16.
 */
/**Given an array, return it's flattened structure. This array can have multiple types: {},[],"",undefined, null, 123 are all
 * valid types inside the array.
 * Flatten the array recursively and interatively*/

//Rescursive solution:
var flatten = function(input) {
    var result = [];

    input.forEach(function(element) {
        result = result.concat(Array.isArray(element) ? flatten(element) : element);
    });

    return result;
};

var ans = [1, {a: 2}, [3], [[4, 5], 6], 7];
//console.log(flatten(ans));

// Iterative solution:
var flat = function(input){
    var i,placeHolder =[input], lastIndex =[-1], out =[];
    while(placeHolder.length){
        input = placeHolder.pop();
        i = lastIndex.pop()+1;
        for(;i<input.length;++i){
            if(Array.isArray(input[i])){
                placeHolder.push(input);
                lastIndex.push(i);
                input=input[i];
                i=-1;
            }else{
                out.push(input[i]);
            }
        }
    }
    return out;
};

console.log(flat(ans));