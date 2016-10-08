/**
 * Created by LucyQiao on 10/8/16.
 */
// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Credits:
// Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

// Hide Company Tags Facebook
// Hide Tags Binary Search
// Hide Similar Problems (M) Search for a Range (M) Search Insert Position (E) Guess Number Higher or Lower


/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// Time: O(logn)
// Space: O(1)
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var start = 0;
        var end = n;
        var lastBad;

        while(start <= end) {
            var mid = start + Math.floor((end - start)/2);
            if(isBadVersion(mid)) {
                // everything including and after are bad version
                lastBad = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return lastBad;
    };
};