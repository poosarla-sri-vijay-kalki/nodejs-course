/**
 * The reqire will take the parameter of the file that needs to be inculded and executes it.
 * But to use the objects in that specific file we need to module.exports in that file.
 *
 */
const { people, cls } = require("./people");

const os = require("os");

console.log(people, cls);

// there some inbuilt files we can import like os. filesystem

console.log(os.platform(), os.homedir());
console.log(os.hostname());
