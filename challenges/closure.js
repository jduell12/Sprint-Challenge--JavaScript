// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal.

*/


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: Closure gives the inner function the ability to look to the outer function for the definition of internal since there is no definition of that variable within the inner function itself.


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(num){
  let counter = 1; 
  let sumOfNum = 0; 

  function sum(){
    while (num > 0){
      sumOfNum += counter;
      counter++;
      num--;
    }
    return sumOfNum;
    
  }

  sum();
  return sumOfNum;
}

console.log(sumation(4))
