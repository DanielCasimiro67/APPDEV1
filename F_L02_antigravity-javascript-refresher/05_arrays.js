let favoriteFoods = ["Adobo", "Sinigang", "Halo-halo"];
favoriteFoods.push("Lechon");   // ["Adobo", "Sinigang", "Halo-halo", "Lechon"]
favoriteFoods.shift();          // ["Sinigang", "Halo-halo", "Lechon"]

for (const food of favoriteFoods) {
  console.log(food);
}

const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);
