// *** Generics *** \\

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

const mergeObj = merge({ name: "David", hobbies: ["sport", "games"] }, {age: '30'});
console.log(mergeObj);

//Conmstrains - extends object

interface Lengthy {
    length: number
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

console.log(countAndDescribe('Hi, there!'))

// KeyOf

const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U) => {
    return 'Value: ' + obj[key]
}

console.log(extractAndConvert({name: 'David'}, 'name'))

const object = {
    name:"David",
}

console.log(object['name'])