const aboutMe = {
  name: "Daniel",
  age: 21,
  course: "Computer Science",
  
  // Using standard function syntax (ES6 shorthand) so 'this' works correctly
  introduce() {
    return `Hi, my name is ${this.name}, I am ${this.age} years old, and I am studying ${this.course}.`;
  }
};

console.log(aboutMe.introduce());
