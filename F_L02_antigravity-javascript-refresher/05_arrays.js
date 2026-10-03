// 1. Initial Setup
let fruits = ["apple", "banana", "cherry"];
console.log("Initial array:", fruits);

// 2. Demonstrate push() (adds to the end)
fruits.push("date");
console.log("After push('date'):", fruits);

// 3. Demonstrate shift() (removes from the beginning)
const removedFruit = fruits.shift();
console.log(`After shift() (removed '${removedFruit}'):`, fruits);

// 4. Demonstrate for...of loop
console.log("\nLooping with for...of:");
for (const fruit of fruits) {
  console.log(`- I have a ${fruit}`);
}

// 5. Demonstrate .map() (creates a new array)
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());

// 6. Final Logs to show immutability of .map()
console.log("\nAfter .map():");
console.log("Original array remains unchanged:", fruits);
console.log("New mapped array:", upperCaseFruits);
