/**
 * Created by LucyQiao on 10/12/16.
 */
var presidents = [

    {"number":32,"president":"Franklin D. Roosevelt","took_office":"1933-03-04","left_office":"1945-04-12"},

    {"number":33,"president":"Harry S. Truman","took_office":"1945-04-12","left_office":"1953-01-20"},

    {"number":34,"president":"Dwight D. Eisenhower","took_office":"1953-01-20","left_office":"1961-01-20"},

    {"number":35,"president":"John F. Kennedy","took_office":"1961-01-20","left_office":"1963-11-22"},

    {"number":36,"president":"Lyndon B. Johnson","took_office":"1963-11-22","left_office":"1969-01-20"},

    {"number":37,"president":"Richard Nixon","took_office":"1969-01-20","left_office":"1974-08-09"},

    {"number":38,"president":"Gerald Ford","took_office":"1974-08-09","left_office":"1977-01-20"},

    {"number":39,"president":"Jimmy Carter","took_office":"1977-01-20","left_office":"1981-01-20"},

    {"number":40,"president":"Ronald Reagan","took_office":"1981-01-20","left_office":"1989-01-20"},

    {"number":41,"president":"George H. W. Bush","took_office":"1989-01-20","left_office":"1993-01-20"},

    {"number":42,"president":"Bill Clinton","took_office":"1993-01-20","left_office":"2001-01-20"},

    {"number":43,"president":"George W. Bush","took_office":"2001-01-20","left_office":"2009-01-20"},

    {"number":44,"president":"Barack Obama","took_office":"2009-01-20","left_office":"2017-01-20"}

];

function sort(key) {
    var arr = presidents.slice(0);
    return arr.sort(GetSortOrder(key));
}
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


function presidentOnDate(date) {
    // return single President name as a string
    var res =[];
    for(var i=0;i<presidents.length;i++){
        var jsonDateStart= presidents[i].took_office;
        var jsonDateEnd= presidents[i].left_office;
        //console.log(jsonDate);
        if(jsonDateStart<=date && jsonDateEnd>=date){
            res.push(presidents[i].president);
        }
    }

    return res;

}

function presidentInRange(date1, date2) {
    // return array of President names from presidents array
    var res =[];

    for(var i=0;i<presidents.length;i++){
        var jsondDateStart= presidents[i].took_office;
        var jsondDateEnd= presidents[i].left_office;
        if((jsondDateStart<=date1 && jsondDateEnd<=date2 && jsondDateEnd>=date1) ||
            (jsondDateStart>=date1 && jsondDateEnd<=date2) ||
            (jsondDateStart>=date1 && jsondDateStart<=date2 && jsondDateEnd>=date2)
            || (jsondDateStart<=date1 && jsondDateEnd>=date2)){

            res.push(presidents[i].president);
        }
    }

    return res;
}

console.log(sort("left_office"));
//console.log(presidentInRange("1992-02-14","2012-01-02"));
//console.log(presidentOnDate("2009-02-14"));
