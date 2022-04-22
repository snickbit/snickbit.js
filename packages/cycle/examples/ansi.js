const {Cycle} = require('../dist')
let instance = new Cycle('ansi')

console.log(instance.next())
console.log(instance.next())
console.log(instance.next())
