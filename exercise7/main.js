let colors = ["blue", "green", "yellow"];

colors.push("black");
console.log(colors); // Output: ["blue", "green ", "yellow", "black"]

colors.pop();
console.log(colors); // Output: ["blue", "green ", "yellow"]

colors.shift();
console.log(colors); // Output: ["green ", "yellow"]

colors.unshift("white");
console.log(colors); // Output: ["white", "green ", "yellow"]

console.log(colors.length); // Output: 3
