/**
 * Created by LucyQiao on 10/18/16.
 */
//recursive way;

var reverseString = function(s) {

    if(s===null || s.length<=1){
        return s;
    }
    var ch = s.split("");
    reverse(ch,0,ch.length-1);
    return ch.join('');
};

var reverse = function(ch,start,end){
    //base case:
    if(start>=end){
        return;
    }

    //recursive rule:
    swap(ch,start,end);
    reverse(ch,start+1,end-1);
}

var swap = function(ch,start,end){
    var temp = ch[start];
    ch[start] = ch[end];
    ch[end] = temp;
}



//iterative--two pointers
var reverseString = function(s) {
    var ch = s.split("");
    if(s===null || s.length<=1){
        return s;
    }
    var i = 0, j = s.length-1;
    while(i<j){
        swap(ch,i,j);
        i++;
        j--;
    }
    return ch.join('');

};

var swap = function(ch,i,j){
    var temp = ch[i];
    ch[i] = ch[j];
    ch[j] = temp;
}