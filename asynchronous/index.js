const fs = require("fs");

console.log("Reading and Writing Files Asynchronously");

//Non-blocking reading and wrting, asynchronous way

fs.readFile("./txt/input.txt", "utf-8", (err, text) => {
  if (err) return console.log("Error while reading file");
  console.log(text);
});
console.log("After reading file");

const textOut = "This is text written to output.txt file";
fs.writeFile("./txt/output.txt", textOut, (err) => {
  if (err) return console.log("Error while writting to file");
  console.log("written to file");
});

console.log("After writting to file");
