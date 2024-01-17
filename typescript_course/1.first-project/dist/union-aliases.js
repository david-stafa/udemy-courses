"use strict";
function combine(input1, // Union type => number or string for example
input2, //Alias
resultType // Literal type => Only these two string are allowed
) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //   if (resultType === 'as-number'){
    //     return +result;
    //   } else {
    //     return result.toString()
    //   }
    return result;
}
const combineAges = combine(30, 26, "as-number");
console.log(combineAges);
const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);
const combineNames = combine("Max", "Anna", "as-text");
console.log(combineNames);
