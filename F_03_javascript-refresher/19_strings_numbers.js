const raw = "  Daniel Casimiro  ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toUpperCase());     // "DANIEL"
console.log(clean.includes("Casimiro")); // true
console.log(clean.slice(0, 6));       // "Daniel"
console.log(`Full name: ${first} ${last}`);

console.log(parseInt("40kg"));      // 40
console.log((14.9999).toFixed(2)); // "15.00"

const result = "xyz" / 2;
console.log(result);               // NaN
console.log(Number.isNaN(result)); // true
