// #!/usr/bin/node
// if(ProcessingInstruction.argv.length != 4) {
//     console.log('./sum.js x y')
//     ProcessingInstruction.exit(0)
// }
// let x = process.argv[2],
//     y = process.argv[3];
// console.log(`${x} + ${y} = ${x+y}`)
const add = require('./add')
console.log(add(3,7))