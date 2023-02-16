/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

LeetCode Link : https://leetcode.com/problems/valid-parentheses/submissions/899226423/

*/


/**
 * @param {string} s
 * @return {boolean}
 */
const characters = {
    "(": ")",
    "[": "]",
    "{": "}"
}

var isValid = function (s) {
    // check if the length is an odd number
    if (s.length % 2 == 1) {
        return false
        // check if the first element is a closing bracket
    } else if (s[0] == "]" || s[0] == ")" || s[0] == "}") {
        return false
        // check if the last element is an opening bracket
    } else if (s[s.length - 1] == "(" || s[s.length - 1] == "{" || s[s.length - 1] == "[") {
        return false
    }

    // create an array to store characters
    let stack = []

    for (let i = 0; i < s.length; i++) {
        // if the first value is an opening bracket
        if (s[i] == "[" || s[i] == "(" || s[i] == "{") {
            // push to the array
            stack.push(s[i])
            // check if the character is not the last character in the array
        } else if (characters[stack.pop()] !== s[i]) {
            return false
        }
    }

    return stack.length == 0
};