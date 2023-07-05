/* 
    Acronyms

    Create a function that, given a string, returns the string’s acronym 
    (first letter of each word capitalized). 
    Do it with .split first if you need to, then try to do it without
    split MDN Document Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    Try to account for 'edge cases' in your function! Such as if we split the words and potentially get an empty string.
*/


const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

function Selector(str) {
    const words = str.split(" ");
    console.log(words);
    let x = "";

    for (let word of words) {
        if (word.length > 0) {
            x += word[0].toUpperCase();
        }
    }

    return x
}

console.log(Selector(str1));





/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) { }

/*****************************************************************************/