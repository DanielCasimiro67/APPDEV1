// Equality & emptiness
console.log(4 == "4");  // true
console.log(4 === "4"); // false

let notDefined;
let empty = null;

console.log(notDefined); // undefined
console.log(empty);      // null

// this & reference vs copy
const profile = {
  name: "Daniel",
  regularMethod: function () {
    console.log(this.name);
  },
  arrowMethod: () => {
    console.log(this.name);
  },
};

profile.regularMethod(); // "Daniel"
profile.arrowMethod();   // undefined

const original = [1, 2, 3];

const copyByReference = original;
copyByReference.push(4);
console.log(original); // [1, 2, 3, 4]

const copyBySpread = [...original];
copyBySpread.push(5);
console.log(original);     // [1, 2, 3, 4]
console.log(copyBySpread); // [1, 2, 3, 4, 5]
