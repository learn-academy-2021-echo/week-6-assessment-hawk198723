// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.
describe("connection", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it(" akes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {

        //an expect method, nested within the test block, calling on the connection() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(connection(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    })
})


// const connection = (people_obj_param) => {

//   return people_obj_param.map(people_state => {
//
//     // let firstletteroffirstname = people_state.name[0]
//     // let firstletteroflastname = people_state.name[people_state.name.indexOf(' ') + 1]
//     // let name = people_state.name.replace(people_state.name[0],people_state.name[0].toUpperCase()).replace(people_state.name[people_state.name.indexOf(' ') + 1],people_state.name[people_state.name.indexOf(' ') + 1].toUpperCase())
//     return `${people_state.name.replace(people_state.name[0],people_state.name[0].toUpperCase()).replace(people_state.name[people_state.name.indexOf(' ') + 1],people_state.name[people_state.name.indexOf(' ') + 1].toUpperCase())} is ${people_state.occupation}.`
//   })
//
// }

//==> refactor
const connection = (people_obj_param) => {

  return people_obj_param.map(people_state => { return `${people_state.name.replace(people_state.name[0],people_state.name[0].toUpperCase()).replace(people_state.name[people_state.name.indexOf(' ') + 1],people_state.name[people_state.name.indexOf(' ') + 1].toUpperCase())} is ${people_state.occupation}.`
  })

}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.
describe("remainderbythree", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {

        //an expect method, nested within the test block, calling on the remainderbythree() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(remainderbythree(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
        expect(remainderbythree(hodgepodge2)).toEqual([ 2, 1, -1 ])
    })
})


// const remainderbythree = (array_param) => {
//   let filtervlues = array_param.filter(value => typeof value === "number").map(numbervalue => numbervalue % 3)
//   return filtervlues
// }
// ==> refactor

const remainderbythree = (array_param) => {
  return array_param.filter(value => typeof value === "number").map(numbervalue => numbervalue % 3)
}
// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("sumcubes", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("that takes in an array of numbers and returns the sum of all the numbers cubed.", () => {

        //an expect method, nested within the test block, calling on the remainderbythree() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(sumcubes(cubeAndSum1)).toEqual(99)
        expect(sumcubes(cubeAndSum2)).toEqual(1125)
    })
})
// b) Create the function that makes the test pass.

// const sumcubes = array_param =>{
//   let sum = array_param.map(value => value = value*value*value).reduce((cubedvalue,a) => cubedvalue + a, 0)
//   return sum
// }

// ==> refactor
const sumcubes = array_param =>{
  return array_param.map(value => value = value ** 3).reduce((cubedvalue,a) => cubedvalue + a, 0)
}
