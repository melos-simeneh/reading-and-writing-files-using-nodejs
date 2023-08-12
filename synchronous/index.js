const fs = require("fs");
//Blocking, synchronous way
console.log("Reading and Writing Files Synchronously");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

console.log("After reading file");

const textOut = "This is text written to output.txt file";
fs.writeFileSync("./txt/output.txt", textOut);
console.log("text written to file");

console.log("After writting to file");
