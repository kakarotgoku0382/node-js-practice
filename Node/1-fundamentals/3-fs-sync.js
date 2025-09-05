const {readFileSync, writeFileSync} = require('fs');
// Same as (destructuring)
// const fs = require('fs');
// fs.readFileSync
console.log('Start')
// to read files (readFileSync)
//utf is the encoding value to avoid buffer
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

// to create a file (writeFileSync)
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} //used for append
)
console.log('Done with this task');
console.log('Starting the next one');
