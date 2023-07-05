// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, 
// the second number is 1, and the nth number is the sum of the (n -1)th and (n -2)th numbers.
// Write a function that takes in an integer n and returns the nth Fibonacci number.

// Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1.
//  For the purpose of this question, the first Fibonnacci number is F0; 
//  therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..




//counting from 1 in the Fibonnacci Sequence
// 0,1,1,2,3,5,8,13,21,34,55



// Because: 0 + 1 = 1, and 1 + 1 = 2, and 1 + 2 = 3, and 2 + 3 = 5 and so on.....


function fibonacciArray(n) {
    // The [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    
   
    for (var i = 2; i < n; i++) {
      var nextNum = fibArr[i - 1] + fibArr[i - 2];
      fibArr.push(nextNum);
    }
   
    return (fibArr[n-1]);
   
    
  }
  
  var result = fibonacciArray(1);
  console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]