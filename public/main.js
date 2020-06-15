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
  `${firstOperand} / ${secondOperand} has a remainder that equals ${remainder}`
)

const numbers = [
  70,
  74,
  56,
  1,
  21,
  59,
  83,
  53,
  5,
  3,
  52,
  57,
  97,
  89,
  93,
  30,
  98,
  89,
  70,
  22,
  61,
  14,
  95,
  82,
  84,
  71,
  82,
  55,
  19,
  44,
  72,
  34,
  19,
  63,
  17,
  88,
  9,
  96,
  65,
  18,
  5,
  86,
  42,
  14,
  12,
  96,
  73,
  32,
  27,
  8,
  74,
  17,
  59,
  12,
  61,
  5,
  58,
  98,
  53,
  75,
  34,
  4,
  62,
  50,
  87,
  33,
  58,
  7,
  91,
  87,
  20,
  79,
  14,
  46,
  34,
  46,
  11,
  41,
  33,
  5,
  13,
  97,
  76,
  60,
  21,
  38,
  84,
  58,
  17,
  1,
  76,
  76,
  39,
  66,
  100,
  74,
  24,
  22,
  51,
  21,
]

let largest = 0
for (let i = 0; i < numbers.length; i++) {
  if (largest < numbers[i]) {
    largest = numbers[i]
  }
}

let smallest = null
for (let i = 1; i < numbers.length; i++) {
  if (smallest === null) {
    smallest = numbers[i]
  }
  if (numbers[i] < smallest) {
    smallest = numbers[i]
  }
}

console.log(largest)
console.log(smallest)

//LINQ method for smallest
//const smallestNumber = Math.min(...numbers)
//console.log(smallest)

//LINQ method for largest
//const largestNumber = Math.max(...numbers)
//console.log(largest)

let arraySum = 0
for (let i = 0; i < numbers.length; i++) {
  arraySum += numbers[i]
}
console.log(arraySum)

//LINQ for sum
//const sum = numbers.reduce((a, b) => a + b, 0)
//console.log(arraySum)

let arrayAverage = 0
for (let i = 0; i < numbers.length; i++) {
  arrayAverage += numbers[i]
}
const average = arrayAverage / numbers.length
console.log(average)

// LINQ for average
//const average = numbers.reduce((a, b) => a + b, 0) / numbers.length
