const fs = require("fs");

console.log("Reading and Writing Files");

const textIn = fs.readFileSync("./text/input.txt", "utf-8");
console.log(textIn);
