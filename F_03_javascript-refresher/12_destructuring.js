const person = { name: "Daniel", age: 21 };
const { name, age } = person;
console.log(name, age);

const hobbies = ["chess", "reading", "gaming"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

function printName({ name }) {
  console.log(name);
}

printName(person);
