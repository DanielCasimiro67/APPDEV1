const hobbies = ["chess", "reading", "gaming"];
hobbies.map(hobby => console.log(hobby));

const student = { name: "Daniel", age: 21 };
const { name, age } = student;
console.log(name, age);

const numbers = [10, 20, 30];
const newNumbers = [...numbers, 40, 50]; // [10, 20, 30, 40, 50]
console.log(newNumbers);
