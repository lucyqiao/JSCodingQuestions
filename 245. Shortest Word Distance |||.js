/**
 * Created by LucyQiao on 11/6/16.
 */
// This is a follow up of Shortest Word Distance. The only difference is now word1 could be the same as word2.

// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// word1 and word2 may be the same and they represent two individual words in the list.

// For example,
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Given word1 = “makes”, word2 = “coding”, return 1.
// Given word1 = "makes", word2 = "makes", return 3.

// Note:
// You may assume word1 and word2 are both in the list.

// Hide Company Tags LinkedIn
// Hide Tags Array
// Hide Similar Problems


/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestWordDistance = function(words, word1, word2) {
    var dist = Infinity;
    var idx1 = dist;
    var idx2 = -dist;

    var same = word1===word2;

    for(var i = 0; i < words.length; i++) {
        if(words[i] === word1) {
            if(same) {
                idx1 = idx2;
                idx2 = i;
            }else{
                idx1=i;
            }
        } else if(words[i] === word2) {
            idx2 = i;
        }

            dist = Math.min(dist, Math.abs(idx1 - idx2))

    }

    return dist;
};

console.log(shortestWordDistance(["practice", "makes", "perfect", "coding","makes"],"makes","makes"));