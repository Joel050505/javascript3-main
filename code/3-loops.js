// Loops allow you to execute code repeatedly based on a condition.

// Task 1: Write a for loop to print numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Task 2: Create a while loop that prints the numbers 10 to 15.
let i = 10;

while (i <= 15) {
  console.log(i);
  i++;
}

// Task 3. Write for-loop that loops through the array `numbers`
// compare every number with the variable `lowest`.
// If the number is lower than `lowest` update `lowest` to the current number
// Use console.log to print `lowest`.

const numbers = [9, 10, 17, 34, 2, 4, 100];
let lowest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < lowest) {
    lowest = numbers[i];
  }
}
console.log("task 3", lowest);
// Task 4, Write a function `getLowest` that takes an array of numbers as
// input and returns the lowest number.

const arrNum = [3, 5, 3, 6, 7, 12, 100];

function getLowest(arr) {
  let lowest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }
  return lowest;
}

const result = getLowest(arrNum);
console.log("Task 4", result);
