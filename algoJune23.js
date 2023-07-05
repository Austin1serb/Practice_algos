/* 
    Given an int to represent how much change is needed
    calculate the fewest number of coins needed to create that change,
    using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
    const denominations = {
      quarter: 25,
      dime: 10,
      nickel: 5,
      penny: 1,
    };
  
    const totalCoins = {};
  
    for (const denomination in denominations) {
      const value = denominations[denomination];
      const count = Math.floor(cents / value);
  
      if (count > 0) {
        totalCoins[denomination] = count;
        cents -= count * value;
      }
  
      if (cents === 0) {
        break;
      }
    }
  
    return totalCoins;
  }
  

    // Start with the highest denomination coins and work down.
    // Divide the total number of cents by the highest value. ( cents / 25 )
    // Subtracting the selected coin from the total cents we are trying to make. 

    // We've finished when total cents reaches zero. 

    // Return a object with the coin name and the total # of that coin.

    console.log(fewestCoinChange(cents3))


/*****************************************************************************/