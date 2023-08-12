const fs = require("fs");

console.log("Reading and Writing Files");

const textIn = fs.readFileSync("./text/input.txt", "utf-8");
console.log(textIn);

const textOut = "This is text written to output.txt file";
fs.writeFileSync("./text/output.txt", textOut);
console.log("text written to file");
