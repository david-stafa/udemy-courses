Typeguards

```ts
if (typeof a === "string" || typeof b === "string") {
  return +a + +b;
}

if ("privilages" in emp) {
  console.log("Privilages: " + emp.privilages);
}

// does not work in interfaces
if (vehicle instanceof Truck) {
  vehicle.loadCargo(1000);
}
```
