// 1. .map() Feature
const hobbies = ["chess", "reading", "gaming"];
// Transforming the raw strings into formatted strings (similar to rendering JSX in React)
const hobbyListItems = hobbies.map(hobby => `<li>${hobby}</li>`);
console.log("Mapped Array:", hobbyListItems);

// 2. Object Destructuring
const student = { name: "Daniel", age: 21, course: "Computer Science" };
// Pulling specific properties out of the object into their own independent variables
const { name, course } = student;
console.log(`\nDestructured Variables: Name is ${name}, studying ${course}.`);

// 3. Spread Operator
const numbers = [10, 20, 30];
// Unpacking the old array into a new array, and adding new items
const newNumbers = [...numbers, 40, 50]; 
console.log("\nSpread Operator New Array:", newNumbers);
