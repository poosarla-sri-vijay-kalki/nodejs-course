const http = require("http");
const fs = require("fs");
//  in node js we need to create a server unlike in other tools like in apache.
const server = http.createServer(function (req, res) {
  console.log("request made");
  res.setHeader("Content-Type", "text/html");

  //    if we add head tag here it's gonna replace the default one.
  //   res.write(`
  //   <p> Hello vijay </p>
  //   `);
  //   res.write("<p> lol</p>");
  //   res.end();

  //   send htm file by reading
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write(data);
      //   res.end();
      res.end(data);
    }
  });
});
// to start listing to request we need to call server.listen()
// here the function will be called at the start of the listening
server.listen(3000, "localhost", () => {
  console.log("listening started");
});
