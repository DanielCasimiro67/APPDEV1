if (true) {
  let insideBlock = "only visible here";
  console.log(insideBlock);
}

try {
  console.log(insideBlock);
} catch (error) {
  console.log("insideBlock is not defined out here");
}

function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
