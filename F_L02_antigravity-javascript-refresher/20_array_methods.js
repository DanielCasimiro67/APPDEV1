const students = [
  { name: "Dan", grade: 91 },
  { name: "Diego", grade: 96 },
  { name: "Carlo", grade: 55 },
];

const passing = students.filter(s => s.grade >= 60);
console.log(passing.map(s => s.name));

const diego = students.find(s => s.name === "Diego");
console.log(diego);

console.log(students.some(s => s.grade < 60));  // true
console.log(students.every(s => s.grade >= 60)); // false

const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(s => s.name));
