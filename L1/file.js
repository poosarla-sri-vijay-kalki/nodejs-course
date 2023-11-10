const fs = require("fs");

// read files
//  the read file is asynchronous function

fs.readFile("../docs/blog1.txt", (err, data) => {
  console.log(err);
  console.log(data); //will give us a buffer.
  console.log(data.toString());
  console.log("this fuction is called after reading the blog1.txt file");
});

// writing files

fs.writeFile("../docs/blog2.txt", "hello, words", () => {
  console.log("file was written");
});

// directories

if (!fs.existsSync("../assest")) {
  fs.mkdir("../assest", (err) => {
    console.log(err);
  });
} else {
  fs.rmdir("../assest", (err) => {
    console.log(err);
  });
}

// deleting files

if (fs.existsSync("../docs/deleteme.txt")) {
  fs.unlink("../docs/deleteme.txt", (err) => {
    console.log(err);
    console.log("file deleted");
  });
}
