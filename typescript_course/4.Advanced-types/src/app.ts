type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//  object intersection is a combination of objects
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "David",
  privilages: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

// intersection in union types is the type that is common
type Universal = Combinable & Numeric;

let Uni: Universal = 3;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
console.log(add("3", "2"));

type UnknownEmployee = Employee | Admin;

// the probles is now that TS does not know if privilages are in emp object (becouse it might be Employee or Admin) so we need to make sure to check it
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privilages" in emp) {
    console.log("Privilages: " + emp.privilages);
  }
  if ("startDate" in emp) {
    console.log("Start date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a Truck...");
  }

  loadCargo(load: number) {
    console.log("Loading " + load + " cargos.");
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated unions
// inside of both interfaces is type => discriminated union type
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed: animal.runningSpeed;
      break;
  }
  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// *** Typecasting *** \\

// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
const userInput = document.getElementById("user-input")! as HTMLInputElement;

userInput.value = "Hi there!";

// alternative to exclamation mark !
const userInput1 = document.getElementById("user-input");

if (userInput1) {
  (userInput1 as HTMLInputElement).value = "Hi there!";
}

// *** Index properties *** \\

interface ErrorContainer {
  // { email: "Not a valid email", username: "Must start with a character" }
  // as many properties with whatever name
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with capital character",
};

// *** Function overloads *** \\
// when TS does not know what type function returns

type CombinableF = string | number;
type NumericF = number | boolean;

// intersection in union types is the type that is common
type UniversalF = CombinableF & NumericF;

function addF(a: number, b: number): number;
function addF(a: string, b: string): string;
function addF(a: number, b: string): string;
function addF(a: string, b: number): string;

function addF(a: CombinableF, b: CombinableF) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addF("David", 1);
console.log(result);

// *** Optional chaining *** \\
// questionmark after value 

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);

// *** Nullish coalescing *** \\

const userData = undefined;

// if usderData are null or undefined apply the second value
const storedData = userData ?? 'DEFAULT'
