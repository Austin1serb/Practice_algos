function balanceIndex(nums) {
  const len = nums.length;

  for (let i = 0; i < len-1; i++) {
    let leftSum = 0;
    let rightSum = 0;

    // Calculate the sum of elements on the left side of the current index.
    for (let j = 0; j < i; j++) {
      leftSum += nums[j];
    }

    // Calculate the sum of elements on the right side of the current index.
    for (let k = i + 1; k < len; k++) {
      rightSum += nums[k];
    }

    // Check if the sums are equal and return the current index if they are.
    if (leftSum === rightSum) {
      return i;
    }
  }

  // If no balance index is found, return -1.
  return -1;
}

const nums = [-2, 5, 7, 0, 1, 2];
const expected1 = 2;

console.log(balanceIndex(nums))