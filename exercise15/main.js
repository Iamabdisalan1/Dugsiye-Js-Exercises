const people = [
  { name: "Alice", age: 25, city: "Wonderland" },
  { name: "Bob", age: 30, city: "New York" },
  { name: "Charlie", age: 28, city: "London" }
];

for (const person of people) {
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  console.log("-----");
}