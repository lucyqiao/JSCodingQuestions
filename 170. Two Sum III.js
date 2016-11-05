/**
 * Created by LucyQiao on 11/4/16.
 */
/**
 * initialize your data structure here
 * @constructor
 */
var TwoSum = function() {
    this.hashmap = new Map();
};

/**
 * Add the number to an internal data structure.
 * @param {number} input
 * @returns {void}
 */
TwoSum.prototype.add = function(input) {
    this.hashmap[input] = this.hashmap[input] || 0;
    this.hashmap[input]++;
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value.
 * @param {number} val
 * @returns {boolean}
 */
TwoSum.prototype.find = function(val) {
    for(var key in this.hashmap){
        var diff = val-parseInt(key);
        if((parseInt(key)===diff) && (this.hashmap[diff]>=2) || (parseInt(key)!==diff) && (this.hashmap[diff]>=1)){
            return true;
        }
    }
    return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var twoSum = new TwoSum();
 * twoSum.add(number);
 * twoSum.find(value);
 */

var twoSum = new TwoSum();
twoSum.add(2);
twoSum.add(2);
twoSum.add(2);
twoSum.add(3);
console.log(twoSum.find(4));
