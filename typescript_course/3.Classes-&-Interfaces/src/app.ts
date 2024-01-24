// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Greetable {
  //its possible to have readonly in interfaces
  readonly name?: string;
  // question mark means the variable is optionall
  outputName?: string;

  greet(phrase: string): void;
}

// interfaces can extend another interfaces
interface AgeRestriction extends Greetable {
  age: number;
}

class Person implements Greetable, AgeRestriction {
  name?: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("David", 23);
// user1.name = 'Max'

user1.greet("Hello. My name is");

console.log(user1);
