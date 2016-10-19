/**
 * Created by LucyQiao on 10/11/16.
 */
var president = [
                {"number": "333", "predidents":"John Lin", "took_date": "2014-03-25", "left_date":"2015-03-25"},
                {"number": "212", "predidents":"Alice Bob", "took_date": "2010-08-09", "left_date":"2012-08-10"},
                {"number": "112", "predidents":"Grace Jia", "took_date": "2008-08-08", "left_date":"2008-12-31"},
                {"number": "402", "predidents":"Fred Pu", "took_date": "2015-10-08", "left_date":"2016-07-27"}
                ];
/*
* ====================================================================================================================*/
/**Version1: sort by number*/
//var sortPresident = function(input){
//    var res =input.slice(0);
//    res.sort(function(a,b){
//        return a.predidents - b.predidents;
//    });
//
//    return res;
//}
//console.log(sortPresident(president));


/**sort by key*/

function GetSortOrder(prop) {
    return function(a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}

function sortP(input,key){
    var arr = input.slice(0);
    return arr.sort(GetSortOrder(key));
}

//console.log(sortP(president,"took_date"));

/*
 * ===================================================================================================================*/
function findPresidentByDate(input,date){
    var res =[];

    for(var i=0;i<input.length;i++){
        var jsonDate= input[i].took_date;
        //console.log(jsonDate);
       if(jsonDate===date){
           res.push(input[i]);
       }
    }

    return res;
}
//console.log(findPresidentByDate(president,"2014-03-25"));

/*
 * ===================================================================================================================*/
function findPresidentByDate(input,start,end){
    var res =[];

    for(var i=0;i<input.length;i++){
        var jsondDateStart= input[i].took_date;
        console.log(jsondDateStart);
        var jsondDateEnd= input[i].left_date;
        if((jsondDateStart<=start && jsondDateEnd<=end) || (jsondDateStart>=start && jsondDateEnd<=end)
        || (jsondDateStart>=start && jsondDateStart<=end && jsondDateEnd>=end) || (jsondDateStart<=start && jsondDateEnd>=end)){
            res.push(input[i].predidents);
        }
    }

    return res;
}

console.log(findPresidentByDate(president,"2008-08-07","2011-08-09"));