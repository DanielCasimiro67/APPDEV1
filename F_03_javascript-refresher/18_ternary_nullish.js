const score = 68;
const result = score >= 70 ? "Pass" : "Fail";
console.log(result);

const num = 12;
console.log(num % 2 === 0 ? "even" : "odd");

const user = { name: "Daniel" }; // no address property
console.log(user.address?.city); // undefined, no crash

const age = 0;
console.log(age || 18); // 18 -- wrong! 0 is falsy
console.log(age ?? 18); // 0 -- right, ?? only replaces null/undefined
