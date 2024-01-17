"use strict";
let userInput;
let UserName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    UserName = userInput;
    console.log(userInput);
}
function generateError(message, error) {
    throw { message: message, errorCode: error };
}
generateError("An error occured!", 550);
