const fs = require("fs");

console.log("Reading and Writing Files");

const textIn = fs.readFile("./text/input.txt", "utf-8");
console.log(textIn);

const textOut = "This is text written to output.txt file";
fs.writeFile("./text/output.txt", textOut, (err, data) => {
  console.log(`${data} written to file`);
});
console.log("text written to file");
