let userInput: unknown;
let UserName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  UserName = userInput;
  console.log(userInput)
}

function generateError(message: string, error: number): never {
  throw { message: message, errorCode: error };
}

generateError("An error occured!", 550);

