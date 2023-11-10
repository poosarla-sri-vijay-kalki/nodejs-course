const http = require("http");
//  in node js we need to create a server unlike in other tools like in apache.
const server = http.createServer(function (req, res) {
  console.log("request made");
  res.setHeader("Content-Type", "text/plain");
  res.write("hello vijay");
  res.end();
});
// to start listing to request we need to call server.listen()
// here the function will be called at the start of the listening
server.listen(3000, "localhost", () => {
  console.log("listening started");
});
