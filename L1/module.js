/**
 * The reqire will take the parameter of the file that needs to be inculded and executes it.
 * But to use the objects in that specific file we need to module.exports in that file.
 *
 */
const { people, cls } = require("./people");

console.log(people, cls);
