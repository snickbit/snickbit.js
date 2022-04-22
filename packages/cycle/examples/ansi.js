const {Cycle} = require('../dist')

const colorCycle = new Cycle('hex')

console.log(colorCycle.next())
console.log(colorCycle.next())
console.log(colorCycle.next())
