"use strict";
const add = (a, b) => {
    return a + b;
};
const add1 = (a, b = 3) => a + b;
const printOutput = (output) => console.log(output);
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
console.log(add(2, 5));
console.log(add1(2));
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
console.log(...hobbies);
const person = {
    firstName: "David",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
const addNumbers = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = addNumbers(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
const { firstName: userName, age } = person;
console.log(userName);
//# sourceMappingURL=app.js.map