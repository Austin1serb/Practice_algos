/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.

Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10222;
const expected2 = 1;

const num3 = 88;
const expected3 = 7;



/*
 *Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    // Convert the number to a string to access each digit
    let stringNum = num.toString();


    let sum = 0

        // Calculate the sum of all the digits
        for (let i = 0; i < stringNum.length; i++) {
         sum += parseInt(stringNum[i]);
        }

        if (sum.toString.length < 2){
            return sum
        }

    // Convert the final one-digit string back to a number and return it
    return sumToOneDigit(sum)

}


var printing1 = sumToOneDigit(num1)
console.log(printing1)
var printing2 = sumToOneDigit(num2)
console.log(printing2)
var printing3 = sumToOneDigit(num3)
console.log(printing3)



/*****************************************************************************/