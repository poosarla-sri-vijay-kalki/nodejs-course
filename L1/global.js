// global object is different in node than in browser
// console.log(global);

// the function in the settimeout will run after 3 seconds
// clear Interval is called to clear the set interval.
setTimeout(() => {
  console.log("hi");
  clearInterval(int);
}, 3000);

// the function in the set interval will run for every 1 second.
//  to stop this function  we need to call clearInterval()
const int = setInterval(() => {
  console.log("ho");
}, 1000);

// __dirname, __filename are present in the global varable for accessing the complete path of the directry and file respectively
console.log(__dirname);
console.log(__filename);
