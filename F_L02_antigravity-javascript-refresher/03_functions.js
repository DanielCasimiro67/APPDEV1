// Standard function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function
const square = (num) => {
  return num * num;
};

// Function returning an object
function calculator(a, b) {
  return {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b
  };
}

// Testing the functions
console.log(greet("Daniel"));
console.log(square(5));
console.log(calculator(10, 2));
