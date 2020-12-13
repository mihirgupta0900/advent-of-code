const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) throw err;
  const strings = data.split("\n");
  const numbers = strings.map((string) => parseInt(string));
  console.log(numbers);
});
