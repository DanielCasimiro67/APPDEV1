const numbers = [10, 20, 30];
const newNumbers = [...numbers, 40, 50];
console.log(newNumbers);

const user = { name: "Daniel", age: 21 };
const newUser = { ...user, email: "daniel.casimiro@student.laverdad.edu.ph" };
console.log(newUser);

function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(2, 4, 6, 8));
