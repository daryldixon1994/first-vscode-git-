const path = require("path");

const fileLocation = path.join(__dirname, 'path.js');

const fileName = path.basename(fileLocation)

console.log(fileName);