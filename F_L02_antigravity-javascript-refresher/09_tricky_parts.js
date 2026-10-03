// Equality & emptiness
console.log(4 == "4");
console.log(4 === "4");

let notDefined;
let empty = null;

console.log(notDefined);
console.log(empty);

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

profile.regularMethod();
profile.arrowMethod();

const original = [1, 2, 3];

const copyByReference = original;
copyByReference.push(4);
console.log("Original after reference push:", original);

const copyBySpread = [...original];
copyBySpread.push(5);
console.log("Original after spread push:", original);
console.log("Spread Copy:", copyBySpread);
