var nums = [2, 7, 11, 8, 11, 8, 3, 11]
// Output: [11, 3]
// Explanation: The maximum value is 11 and it appears 3 times


// class Solution {
//     /**
//     * @param {number[]} nums
//     * @return {number[]}
//     */
function maxValNumOfOccurrences(nums) {
    var maxVal = nums[0]
    var count = 0
    for (let i = 0; i <= nums.length - 1; i++) {
        var val = nums[i]
        if (val > maxVal) {
            maxVal = val

        }


    }
    for (let j = 0; j <= nums.length - 1; j++) {

        if (nums[j] == maxVal) {
            count++;
        }

    }
    return ([maxVal, count])
}
console.log(maxValNumOfOccurrences(nums));
