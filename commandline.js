const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

rl.question("What are the strings? ", (answer) => {
  const arr = answer.split(" ");
  const mappi = arr.map((num) => Number(num) + 3);
  console.log("arr--->", arr);
  console.log("mappi--->", mappi);
  rl.close();
});
