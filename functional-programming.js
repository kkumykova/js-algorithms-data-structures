// Learn about Functional Programming
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);

/*
Understand Functional Programming Terminology

Callback Functions
Callbacks are the functions that are slipped or passed into another function to decide the invocation 
of that function. You may have seen them passed to other methods, for example in filter, the callback function 
tells JavaScript the criteria for how to filter an array.

First Class Functions
Functions that can be assigned to a variable, passed into another function, or returned from another function
just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

Higher Order Functions
The functions that take a function as an argument,or return a function as a return value.

Lambda Functions
When functions are passed in to or returned from another function.
*/
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

/*
Understand the Hazards of Using Imperative Code

*/