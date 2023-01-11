/*
A function that calls itself is called a recursive function. In some ways, recursion is analogous to a loop.
Both execute the same code multiple times, and both require a condition (to avoid an infinite loop, or rather, 
infinite recursion in this case).

It is possible to convert any recursive algorithm to a non-recursive one,
but the logic is often much more complex, and doing so requires the use of a stack.
In fact, recursion itself uses a stack: the function stack.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursion
*/
function foo(i) {
    if (i < 0) {
      return;
    }
    console.log(`begin: ${i}`);
    foo(i - 1);
    console.log(`end: ${i}`);
  }
  foo(3);
  
  // Logs:
  // begin: 3
  // begin: 2
  // begin: 1
  // begin: 0
  // end: 0
  // end: 1
  // end: 2
  // end: 3

/*
Replace Loops using Recursion
Recursion is the concept that a function can be expressed in terms of itself. 
Note: Recursive functions must have a base case when they return without calling the function again 
(in this example, when n <= 0), otherwise they can never finish executing.

The if statement checks to see if sum is evaluating the base case, n <= 0, or not.
If it is, then sum returns the answer, 0 - the sum of elements from 0 to 0 inclusive.
Otherwise, it recurses by evaluating a simpler function call, sum(arr, n - 1).
Once that returns it adds a single array element, arr[n - 1], to it and returns that sum.
*/

function sum(arr, n) {

    if (n <= 0) {
      return 0;

    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
}

sum([2, 3, 4, 5], 3);


/*
Create a count down function which should use recursion to return an array containing the integers n through 1 based on the n parameter.
If the function is called with a number less than 1, the function should return an empty array.
For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.
*/

function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(5));


/*
Use Recursion to Create a Range of Numbers

The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter.
The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind.
It should also work for cases where both startNum and endNum are the same.
*/

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1 );
    countArray.push(endNum)
    return countArray;  
  }
};

console.log(rangeOfNumbers(1,5))

/*Fibonacci number
Create the function fibonacci that receives n and returns f(n). You have to use recursion.
In fibonacci sequence each item is the sum of the previous two.
*/
function fibonacci( n)  {
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}
