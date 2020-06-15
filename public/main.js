const numberOfCupsOfCoffee = 1
const fullName = 'Cody Banks'

console.log(
  `Hello, my name is ${fullName}, and I drink ${numberOfCupsOfCoffee} cup of coffee a day!`
)

const userName = window.prompt('What is your name?')
console.log(`It's a pleasure to meet you ${userName}!`)

const firstValue = window.prompt('Please choose one random number.')
const secondValue = window.prompt('Please choose another single random number.')

const firstOperand = parseFloat(firstValue)
const secondOperand = parseFloat(secondValue)

const sum = firstOperand + secondOperand
const difference = firstOperand - secondOperand
const product = firstOperand * secondOperand
const quotient = firstOperand / secondOperand
const remainder = firstOperand % secondOperand

console.log(`${firstOperand} + ${secondOperand} = ${sum}`)
console.log(`${firstOperand} - ${secondOperand} = ${difference}`)
console.log(`${firstOperand} * ${secondOperand} = ${product}`)
console.log(`${firstOperand} / ${secondOperand} = ${quotient}`)
console.log(
  `${firstOperand} / ${secondOperand} has a remainder that = ${remainder}`
)
