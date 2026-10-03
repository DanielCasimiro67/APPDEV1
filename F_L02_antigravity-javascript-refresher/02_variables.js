// --- 1. Data Types & typeof ---
const subject = "JavaScript"; // Used const because the subject name won't change
let year = 2;                 // Used let because the year might increase
let isEnrolled = true;

console.log("Subject:", subject, "| Type:", typeof subject);
console.log("Year:", year, "| Type:", typeof year);
console.log("Enrolled:", isEnrolled, "| Type:", typeof isEnrolled);

// --- 2. Basic Arithmetic ---
let x = 12, y = 4;
console.log("\n--- Arithmetic ---");
console.log(`Adding ${x} + ${y}:`, x + y);
console.log(`Dividing ${x} / ${y}:`, x / y);

// --- 3. Equality Operators (== vs ===) ---
console.log("\n--- Equality ---");
console.log("Is '4' == 4? (Loose):", "4" == 4);   // true (type coercion)
console.log("Is '4' === 4? (Strict):", "4" === 4);  // false (different types)

// Additional equality examples to highlight type coercion
console.log("Is 0 == false? (Loose):", 0 == false); // true
console.log("Is 0 === false? (Strict):", 0 === false); // false
