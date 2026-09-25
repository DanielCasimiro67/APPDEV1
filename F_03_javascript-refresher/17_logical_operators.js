// Truthy & falsy
const values = [0, "", "JavaScript", null, undefined, [], {}];

values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});

// &&, || and !
const username = "Dan";
const password = "daniel123";

const canLogIn = username !== "" && password !== "";
console.log(canLogIn); // true

const isAdmin = false;
const isSubscriber = true;
const canWatch = isAdmin || isSubscriber;
console.log(canWatch); // true

console.log("" || "default");        // "default"
console.log(username && "Welcome!"); // "Welcome!"
console.log(!canLogIn);              // false
