/* 
    Given a string containing space separated words
    Reverse each word in the string.

    If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    reversed = str.split('').reverse('').join('').split(' ').reverse(' ').join(' ')
    return reversed
}

console.log(reverseWords(str3))
/*****************************************************************************/

/* 
    Reverse Word Order

    Given a string of words (with spaces)
    return a new string with words in reverse sequence.
*/

const str1_1 = "This is a test";
const expected1_1 = "test a is This";

const str2_1 = "hello";
const expected2_1 = "hello";

const str3_1 = "   This  is a   test  ";
const expected3_1 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(wordsStr) {
    let result = '';
    let words = wordsStr.split(' ');
    // console.log(words)
    let temp = []
    for (i=words.length-1; i>=0; i--){
         temp.push(words[i])
    }
//    var isSpace = true;
//    for (let j = 0; j < wordsStr.length; j++) {
//     if (wordsStr[j] === ' ') {
//         if (!isSpace) {
//             result += ' ';
//             isSpace = true;
//         }
//         else {
//             result += wordsStr[j];
//             isSpace = false;
            
//         }
//     }
//    }
  
return temp.join(' ')
}

console.log(reverseWordOrder(str3_1))