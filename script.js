var z = 5;


let x = 5; // Value of this variable can change
const y = 5;

// y = 7; => Error


for (let i = 0; i< 6; i++) {
  console.log(i)
}

console.log('final i: ' + i)


// ==============================================================


function add (getNumbers, stringToAdd) {
  const nums = getNumbers(4)
  console.log(nums)
  const num1 = nums[0]
  const num2 = nums[1]

  return (num1 + num2) + stringToAdd
}

function getNumbers (myNum) {
  return [1, myNum]
}

add(getNumbers, 'asdfsdf')

// =========================================

const arr = [1, 2, 4, 5, 7, 8, 8, 9, 9]

for (let i = 0; i < arr.length; i++) {
  console.log(i)
}

arr.forEach(print)

function print(number) {
  console.log(number)
}

arr.forEach(function (number) {
  console.log(number)
})

// ==============================================

// Lambda Function
// Arrow Function
arr.forEach(number => console.log(number))

// Remove the word "function"
// Put an "equals and greater than" next to function parameters
arr.forEach((number, index) => {
  console.log("Number: " + number)
  console.log("Index: " + index)
})

function myFunc() {
  console.log('abcd');
}
setTimeout(myFunc, 5000)

setTimeout(() => {
  console.log('abcd');
}, 5000)

const b = 9;
const c = 0;

// Backtick ```````
// ~~~~~~~~~
console.log('StringA' + "StringB" + b)
// Backticks
// Dollar Sign with CUrly Braces
// Write the variable in between
console.log(`StringAStringB${b}${c}asghsd`)

// ===================================================

// Higher Order Functions

// filter
// map
// reduce

const testArray = ['asdf', 'asdfgdfh', 0, '1', 0, 0]

// Every element except zeroes
// let myArray = []
for (let i = 0; i < testArray.length; i++) {
  if (testArray[i] != 0) {
    // myArray[i] = testArray[i]
    // testArray.push(testArray[i])
  }
}

// myArray

const starfish = testArray.filter((number) => {
  return number != 0
})

function filterFunc(number, index, array) {
  array.concat(3)
  console.log(array)
  return number != 0
}

const starfish2 = testArray.filter(filterFunc)

starfish
starfish2


//==========================================

const tarr = [1, 4, 6, 7]
tarr.push(0)
tarr

const tarr2 = [1, 4, 6, 7]
const finalArray = tarr2.concat(0)
tarr2
finalArray

// Immutability
// We leave the original variable alone, and create the copy of the variable and use that
// Why? Because multiple "things" can be accessing the variable at same time; and we want consistent results

// ==========================================

const tarr3 = [1, 4, 6, 7]

// Multiply every element by 2
for (let i = 0; i < tarr3.length; i++) {
  tarr3[i] = tarr3[i] * 2
}

tarr.forEach((num, index, array) => {
  array[i] = array[i] * 3
})

let arr4 = [1, 4, 6, 7]
arr4 = arr4.map((number) => {
  return `${number * 4}asdioghdfintkel`
})

arr4 = arr4.map(number => number * 4)

// ==================================

// Reduce

let potato = [1, 4, 6, 7]

// let sum = 0
// for (let i = 0; i < potato.length; i++) {
//   sum = sum + potato[i]
// }

const finalSum = potato.reduce((sum, curValue) => {
  sum = sum + curValue
  return sum
}, 0)

const finalString = potato.reduce((str, curValue) => {
  str = str + curValue
  return str
}, 'My Value: ')

console.log(finalString)

console.log(finalSum)

// filter = Filter out values from array
// Map = Transform every element of array individually (example: multiplying by 2)
// Reduce = Transform array into something else entirely (sum-ing array, concatenating every element into string etc.)

// Starting Value
// potato = potato.reduce(reducerFunc, 0)

// function reducerFunc(sum, curValue) {

// }
