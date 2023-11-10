const fs = require("fs");
let readStream = fs.createReadStream("../docs/blog3.txt", { encoding: "utf8" });
let writeStream = fs.createWriteStream("../docs/blog4.txt");
readStream.on("data", (chunk) => {
  console.log("new Stream");
  console.log(chunk);
  writeStream.write("\n   new chunck  \n");
  writeStream.write(chunk);
});
