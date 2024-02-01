// *** Decorators *** \\

// function Logger(constructor: Function){
//     console.log('Logging...')
//     console.log(constructor)
// }

function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTeplate(template: string, hookId: string) {
  console.log("Template factory");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      //* _ : this underscore name tells TS that we know this argument is not used
      constructor(..._: any[]) {
        super();
        console.log("Rendering template...");
        const hook = document.getElementById(hookId);
        if (hook) {
          hook.innerHTML = template;
          hook.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// @Logger('LOGGING - PERSON')
@Logger("Logging...")
@WithTeplate("<h1>My Person Object </h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new Person();
console.log(pers);

//  ---

//Property decorator
function Log(target: any, propertyName: string | symbol) {
  console.log("Property Decorator");
  console.log(target, propertyName);
}

//Setter decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}
// Methods decorator
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// Parametr decorator
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function autoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // this will always refer to the object
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @autoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
// It does not work without bind() beoucse this.name refers to Event Listener this
// button.addEventListener("click", p.showMessage.bind(p));
button.addEventListener("click", p.showMessage);

// *** Validation *** \\

interface ValidateConfig {
  [property: string]: {
    [validateProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidateConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
  const objectValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objectValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objectValidatorConfig) {
    for (const validator of objectValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  console.log(validate(createdCourse));

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});
