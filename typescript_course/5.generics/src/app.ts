// *** Generics *** \\
// provides flexibility combines with type safety

// const names: Array<string> = ["David", "Max"]; // string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// Creating generics

const merge = <T extends object, U extends object>(objA: T, objB: U): T & U => {
  return { ...objA, ...objB };
};

const mergeObj = merge(
  { name: "David", hobbies: ["sport", "games"] },
  { age: "30" }
);
console.log(mergeObj);

//Conmstrains - extends object

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }

  return [element, descriptionText];
};

console.log(countAndDescribe("Hi, there!"));

// KeyOf

const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return "Value: " + obj[key];
};

console.log(extractAndConvert({ name: "David" }, "name"));

const object = {
  name: "David",
};

console.log(object["name"]);

// *** Generics classes *** \\

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  addItem(item: T) {
    this.data.push(item);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("David");
textStorage.addItem("Ondra");
textStorage.removeItem("David");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);

// Does not work with objects
// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: "David" });
// objectStorage.addItem({ name: "Max" });
// // ...
// objectStorage.removeItem({ name: "Max" });
// console.log(objectStorage.getItems());

// *** Generic Utility types *** \\

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ["Max", "Anna"];
names.push("Manu");
