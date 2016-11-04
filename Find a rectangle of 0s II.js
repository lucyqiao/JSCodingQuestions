/**
 * Created by LucyQiao on 10/26/16.
 */
//O(n^3)
var solution = function(arr) {
    var rows=arr.length;
    var cols=arr[0].length;
    var res=[];
    var width=0, height=0;

    for(var i=0;i<rows;i++){
        for(var j=0;j<cols;j++){
            //find the first 0 occure
            if(arr[i][j]===0){
                res.push(i);
                res.push(j);
                var k = i;

                while (k<rows && arr[k][j] === 0) {
                    //reset to1:for
                    arr[k][j] = 1;
                    k++;
                }
                height = k-i;
                k = j;
                arr[i][j] = 0;

                while (k<cols && arr[i][k] === 0){
                    //reset to 1
                    arr[i][k] = 1;
                    k++;
                }
                width = k-j;

                res.push(width);
                res.push(height);

               //reset to 1;
               // var h=i+height;
               // var w =j+width;
               // for(var m=i;m<h;m++){
               //     for(var n=j;n<w;n++){

               //         arr[m][n]=1;
               //     }
               // }


            }
        }
    }

    return res;
}



var arr = [
    [0,0,0,0,0,0],
    [1,1,1,1,1,1],
    [1,1,1,0,0,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1]
];


console.log(solution(arr));
//00613221

/*
 There are N black shapes in the image. They are not necessarily rectangles -- they are odd shapes (“islands”). Find them.

 */

//JavaScript
var image = [
    [1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
];