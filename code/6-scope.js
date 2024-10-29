// JavaScript scope determines the accessibility of variables within different parts of the code.

// Task 1: Declare a variable called `globalVar` with the value "I am global".

let globalVar = "I am global";

// Task 2: Create a function called `testScope` that declares a variable called
// `localVar` with the value "I am local".
function textScope() {
  const localVar = "I am local";
  console.log("globalVar: ", globalVar);
  console.log("localVar: ", localVar);
}

// Task 3: Inside `testScope`, print both `globalVar` and `localVar`.
textScope();

// Task 4: Outside of the function, try to print `localVar` and observe the result.

console.log("LocalVar: ", localVar);
// Output localVar is not defined, because its defined inside of a function.
// Can't acces a local variabel outside its bubble/function
