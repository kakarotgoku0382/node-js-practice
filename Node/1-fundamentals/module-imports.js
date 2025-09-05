//CommonJS, every file is a module (By default)
// Modules - Encapsulated Code (Only share minimum)

const names = require('./module-exports.js')
const Hi = require('./function.js')
const data = require('./alternative-exports.js')
require('./functions.js')

// console.log(data)
// console.log(names);
// Hi('Tapas Ranjan')
// Hi(names.john)
// sayHi(names.bob)



