// This stretch goal assignment will challenge your understanding of the spread operator, destructuring,
// loops, truthiness and filtering.

// Starting Data
const student = { name: "Alex", age: 20, grades: [85, 90, 78] };
const course = {
  title: "JavaScript Basics",
  duration: "3 months",
  instructor: {
    firstName: "Sara",
    lastName: "Jones",
  },
};
const numbers = [0, 15, -3, 9, null, 22, undefined, 8, NaN, false, 100];

// Task 1: Object Manipulation
// Use the spread operator to create a new object called `updatedStudent`, updating the age to 21
// and adding a new property `major` with the value "Computer Science".
// Log `updatedStudent` to the console.

const updatedStudent = { ...student, age: 21, major: "Computer Science" };

console.log(updatedStudent);

// Task 2: Nested Destructuring
// Use nested destructuring to extract the firstName and lastName of the instructor from the `course` object
// into variables `instructorFirstName` and `instructorLastName`.
// Log `instructorFirstName` and `instructorLastName` to the console.

// const instructorFirstName = course["instructor"]["firstName"];
// const instructorLastName = course["instructor"]["lastName"];

const { firstName: instructorFirstName, lastName: instructorLastName } =
  course.instructor;
console.log(instructorFirstName + " " + instructorLastName);

// Task 3: Filtering and Truthiness
// Write a function called `filterValidNumbers` that filters out all falsy values and any negative numbers
// from the `numbers` array.
// Call `filterValidNumbers` with `numbers` and log the result to the console.

function filterValidNumbers(arr) {
  return arr.filter((num) => num && num > 0);
}

console.log(filterValidNumbers(numbers));

// Task 4: Loop with Conditionals
// Write a function called `analyzeStudentGrades` that takes an object representing a student
// (with properties `name` and `grades` - an array of numbers) and calculates the average grade.
// If the average is above 85, print "Excellent performance, [Student Name]!".
// If it's between 70 and 85, print "Good job, [Student Name]!".
// If it's below 70, print "[Student Name], you need to improve.".
// Call `analyzeStudentGrades` with the `updatedStudent` object.

const student2 = { name: "Morgan", age: 24, grades: [60, 95, 80] };
const student3 = { name: "Loo", age: 22, grades: [40, 50, 100] };
const student4 = { name: "Loo", age: 22, grades: [120, 90, 100] };

function analyzeStudentGrades(obj) {
  const name = obj["name"];

  let sum = 0;
  obj["grades"].forEach((num) => {
    return (sum += num);
  });
  let average = sum / obj["grades"].length;

  if (average >= 85) {
    console.log(`Excellent performance [${name}]!`);
  } else if (average >= 70 && average < 85) {
    console.log(`Good job [${name}]!.`);
  } else {
    console.log(`[${name}] you need to improve.`);
  }
}

analyzeStudentGrades(student4);
analyzeStudentGrades(student2);
analyzeStudentGrades(student3);
