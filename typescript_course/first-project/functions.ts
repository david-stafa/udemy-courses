function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// printResult(add(5, 12));
// console.log(printResult(add(5, 12)));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult; // this does not work becouse the function does not match criteria above
addAndHandle(10, 20, (result) => {
  console.log(result);
});
