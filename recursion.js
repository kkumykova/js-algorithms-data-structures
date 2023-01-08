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
