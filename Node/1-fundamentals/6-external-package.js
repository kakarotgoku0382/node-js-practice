const _ = require('lodash') //lodash is a external package module that we installed

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items) //flattenDeep is a method of lodash module
console.log(newItems);
console.log('Hello World');