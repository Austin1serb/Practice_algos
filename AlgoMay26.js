function rotateArray(arr, shiftBy) {
    let newArr = [];

  
    
    for (let i = 0; i < arr.length; i++) {
      // Calculate the new index for each element after the rotation
      let newIndex = (i + shiftBy) % arr.length;
  
      // Add the element at the new index to the new array
      newArr[newIndex] = arr[i];
    }
  
    return newArr;
  }
  
  const arr = [1, 2, 3, 4];
  console.log(rotateArray(arr, -2)); // Output: [3, 4, 1, 2]



  // ------ ****** Part 2 ******--------

/* 
  Given an array and an index,
  remove the item at that index.
  return the removed item

  If index is out of range, return null and don't alter the array
  
  No built-in array methods except pop().
*/

const arr1 = ["a", "b", "c", "d", "e"];
const removeIdx1 = 1;
const expected1 = "b";
// after function call, arr1 should be:
const arr1Expected = ["a", "c", "d", "e"];

const arr2 = ["a", "b", "c"];
const removeIdx2 = 3;
const expected2 = null;
const arr2Expected = ["a", "b", "c"];

const arr3 = ["a", "b", "c"];
const removeIdx3 = -3;
const expected3 = null;
const arr3Expected = ["a", "b", "c"];

const arr4 = ["cake", "pie", "cookies", "vegetables", "candy"];
const removeIdx4 = 3;
const expected4 = "vegetables";
const arr4Expected =  ["cake", "pie", "cookies", "candy"];


function remove(arr, index) {
    if (index >= arr.length) {
      return null;
    }
  
    // Store the item to be removed
    const removedItem = arr[index];
  
    // Shift the elements to the left
    for (let i = index; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
  
    // Pop the last element
    arr.pop();
  
    return removedItem;
  }

  

  console.log(remove(["a", "b", "c"], 2));
  
  // Test cases
//   const arr1 = ["a", "b", "c", "d", "e"];
//   const removeIdx1 = 1;
//   const expected1 = "b";
//   const arr1Expected = ["a", "c", "d", "e"];
  
//   const arr2 = ["a", "b", "c"];
//   const removeIdx2 = 3;
//   const expected2 = null;
//   const arr2Expected = ["a", "b", "c"];
  
//   const arr3 = ["a", "b", "c"];
//   const removeIdx3 = -3;
//   const expected3 = null;
//   const arr3Expected = ["a", "b", "c"];
  
//   const arr4 = ["cake", "pie", "cookies", "vegetables", "candy"];
//   const removeIdx4 = 3;
//   const expected4 = "vegetables";
//   const arr4Expected =  ["cake", "pie", "cookies", "candy"];