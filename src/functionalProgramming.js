import {compose, pipe} from "lodash/fp"
import { produce } from "immer"

// console.log("Redux Starter Project!!");


// function greeting () {
//     return function () {
//         return "Good morning"
//     }
// }

// let anFunction = greeting ()
// let message = anFunction ()
// console.log(anFunction);
// console.log(message);

let userName = "  Shohaib  "
let message = "Hello " + userName.trim() + " Good Morning!"
// console.log(message);

const trim = name => name.trim()
const greetingMessage = name => `Hello ${name} Good Morning!`
const convertToUpper = name => name.toUpperCase()

// const result = greetingMessage(convertToUpper(trim(userName)))
// const newFn = compose(greetingMessage, convertToUpper, trim)
const newFn = pipe(trim, convertToUpper, greetingMessage)
const result = newFn(userName)
console.log(result);

// Currying 
// function add (a) {
//     return function (b) {
//         return a + b
//     }
// }
const add = a => b => a + b

// const result1 = add(5)
// const result2 = result1(7)
const resultCurrying = add(5)(7) 

console.log(resultCurrying);

const employee = {
    name: "Alex", 
    age: 27, 
    company: {country: "Canada", city: "Toronto"}
}
// const newEmployee = Object.assign({}, employee, {name: "Peter"})
// const newEmployee = {
//     ...employee, 
//     name: "Peter",
//     company: {...employee.company , country:"USA", city: "Vancouver"}

// }

const newEmployee = produce(employee, (draftState) => {
    draftState.name = "Peter"
    draftState.company.city = "Vancouver"
})

console.log(employee)
console.log(newEmployee)

const numbers = [10, 20, 30, 40]

// const addedNumbers = [20,...numbers, 50]
// const index = numbers.indexOf(30)
// const addedNumbers = [...numbers.slice(0, index), 50, ...numbers.slice(index)]
// const numbers = [10, 20, 30, 40];


// Update a number in an array
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 40) {
//         numbers[i] = 80;
//     }
// }

// console.log(numbers); // Output will be [10, 20, 30, 80]



// Removing an item from an array

// const numbers = [10, 20, 30, 40];
// const indexToRemove = numbers.indexOf(30); // Find the index of the item to remove

// if (indexToRemove > -1) {
//     numbers.splice(indexToRemove, 1); // Removes 1 item at the index
// }

// console.log(numbers); // Output: [10, 20, 40]
// const numbers = [10, 20, 30, 40];
// const itemToRemove = 30;
// const updatedNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== itemToRemove) {
//         updatedNumbers.push(numbers[i]);
//     }
// }

// console.log(updatedNumbers); // Output: [10, 20, 40]



const removingNumbers = numbers.filter(n => n !== 30)


console.log(numbers);
console.log(removingNumbers);

const book = {
    author: "Robert Kiyosaki",
    book: {
        name: "Rich Dad Poor Dad",
        price: "$8",
        rating: 4
    }
}

const newBook = produce(book, (draftState) => {
    draftState.book.rating = 4.8
})
console.log(newBook)

const arrayOfBooks = ["Book1", "Book2", "Book3"]

const newArrayOfBooks = arrayOfBooks.map(b => b=== "Book2" ? "Book4" : b)
console.log(newArrayOfBooks);
