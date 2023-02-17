/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Leetcode Link: https://leetcode.com/problems/group-anagrams/submissions/899822953/
*/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const groups = {};
    for (let str of strs) {
        // split the strings into characters and sort them in ascending order
        const key = str.split("").sort();
        if (key in groups) {
            //if the char array is found in the object, add it to the string
            groups[key].push(str);
        }
        else {
            // else make the char the string array
            groups[key] = [str];
        }
    }
    //return the string keys of group object
    return Object.values(groups);
};