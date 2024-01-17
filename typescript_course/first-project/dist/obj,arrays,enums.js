"use strict";
// Also a way how to do it... TS is doing it automatically
// const person: {
//   name: string;
//   age: number;
// }
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "David",
//   age: 27,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"], //* called TUPLE -> fixed length array
// };
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // default behavior starts at 0 
const person = {
    name: "David",
    age: 27,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
// person.role.push("admin"); / Push is allowed in tuples even the length exceedes 
// person.role[1] = 10;
let favoriteActivities;
favoriteActivities = ["Sport"];
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}
