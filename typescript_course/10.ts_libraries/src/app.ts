import { Product } from "./product.model";
import "reflect-metadata";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

const products = [
  { title: "A carpet", price: 12.99 },
  { title: "A car", price: 999.99 },
];

// const p1 = new Product("A book", 15.99);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

const newProd = new Product("", -99.44);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation error");
    console.log(errors);
  } else console.log(newProd);
});

// import _ from "lodash";

// declare const GLOBAL: string;

// console.log(_.shuffle([1,2,3]))

// console.log(GLOBAL)
