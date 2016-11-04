/**
 * Created by LucyQiao on 10/24/16.
 */
//O(n^2)
var solution = function(arr) {
    var rows=arr.length;
    var cols=arr[0].length;
    var res=[];
    var width=0, height=0;

    for(var i=0;i<rows;i++){
        for(var j=0;j<cols;j++){
            if(arr[i][j]===0){
                res.push(i);
                res.push(j);
                var k = i;
                while (k<rows && arr[k][j] === 0) k++;
                height = k-i;
                k = j;
                while (k<cols && arr[i][k] === 0) k++;
                width = k-j;

                res.push(i+height-1);
                res.push(j+width-1);

                return res;

            }

        }
    }

    return res;

    //width=res[res.length-1]-res[1]+1;
    //height=res[res.length-2]-res[0]+1;




}


var arr = [
    [1,1,1,1,1,1],
    [1,0,0,0,1,1],
    [1,0,0,0,1,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1]
];

console.log(solution(arr));