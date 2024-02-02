

// function sayHello(name) {
//     console.log('Hello'+name)
// }

// sayHello('John')
// sayHello('Alice')


// const v = 10

// if (v>5) {
//     console.log('It is a big number')
// }
// else {
//     console.log('It is a small number')
// }


// setInterval(()=>{
//     console.log('Node.js wow')
// }, 3000);

// setTimeout(()=>{
//     console.log('timeout')
// }, 3000);


// Module : 함수의 집합

// Module.logger.js ==> showLogMessage

// logger.js module를 불러온다

const logger = require('./logger.js')

// logger.showLogMessage('module test')

logger.showLogMessage('first')
logger.secondLog('second')
console.log('value'+logger.pvalue)