// Logging + case sensitivity
console.log("Hello, JavaScript! This is Daniel's refresher.");

let studentName = "Daniel";
let studentname = "Casimiro"; // a different variable, because JS is case-sensitive

console.log(studentName); // Daniel
console.log(studentname); // Casimiro

// Valid vs invalid identifier names
// Valid -- follows every rule
let score = 95;
let _cache = "temporary";
let $total = 249.5;
let fullName = "danielCasimiro"; // camelCase convention

// Invalid -- each one breaks a rule (all throw a SyntaxError)
// let 3cool = true;      -- can't start with a digit
// let first-name = "Jo"; -- hyphens aren't allowed in a name
// let class = "BSIS";    -- "class" is a reserved word

console.log(score, _cache, $total, fullName);
