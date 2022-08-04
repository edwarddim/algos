/* 
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, 
also represented as a string.
Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

CONSTRAINTS
 - 1 <= num1.length, num2.length <= 200
 - num1 and num2 consist of digits only.
 - Both num1 and num2 do not contain any leading zero, except the number 0 itself.
*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
    let integerTotal = parseInt(num1) * parseInt(num2)
    return integerTotal + ""
};