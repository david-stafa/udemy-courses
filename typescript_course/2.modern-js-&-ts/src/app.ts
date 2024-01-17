// Code goes here!
// const userName = "David";
// const age = 27;

const add = (a: number, b: number) => {
  return a + b;
};

//! Make sure default parameters comes from left otherwise it does not work correctly
const add1 = (a: number, b: number = 3) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

console.log(add(2, 5));
console.log(add1(2));

//* Arrays
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies);
console.log(activeHobbies);
console.log(...hobbies);

//* Objects
const person = {
  firstName: "David",
  age: 30,
};

const copiedPerson = { ...person };

console.log(copiedPerson);

// This accepts any number of arguments
const addNumbers = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = addNumbers(5, 10, 2, 3.7);
console.log(addedNumbers);

// Array destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

// Object destructuring
const { firstName:userName, age } = person; // firstName:UserName -> JS syntax for renaming
console.log(userName)
