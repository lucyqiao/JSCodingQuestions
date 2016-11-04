/**
 * Created by LucyQiao on 11/3/16.
 */
var numToLetters = {
    '0': ' ',
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};

var letterCombinations = function(digits) {
    var res = [];

    if(digits.length === 0) {
        return res;
    }

    function dfs(digits, idx, curr) {
        if(idx === digits.length) {
            res.push(curr);
            return;
        }

        var letters = numToLetters[digits[idx]];

        for(var i = 0; i < letters.length; i++) {
            dfs(digits, idx + 1, curr + letters[i]);
        }
    }

    dfs(digits, 0, '');
    return res;
};

console.log(letterCombinations("234"));