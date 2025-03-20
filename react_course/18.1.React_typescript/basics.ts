// Primitives: number, string, boolean
// More complex: array, object
// Function types, parameters

//Primitives

let age: number;
age = 12;

let userName: string;
userName = "David";

let isInstructor: boolean;
isInstructor = false;

// Array, object

let hobbies: string[];
hobbies = ["1", "2", "3"];

let person: { name: string; age: number };
person = { name: "David", age: 28 };

let people: {
  name: string;
  age: number;
}[];

people = [{ age: 12, name: "David" }];

// Type inference

let course = "React - The complete guide";
course = 123; // oops

// Union type

let union: string | number;
union = 1;
union = "1";

// type alias

type Human = {
  name: string;
  age: number;
  sex: "male" | "female";
};

const David: Human = {
  age: 28,
  name: "David",
  sex: "male",
};

// Functions

function add(a: number, b: number): number {
  return a + b;
}

function printValue(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1,1,2,3]

updatedArray[0].split(); // with generics TS nows that split is not valid for number
