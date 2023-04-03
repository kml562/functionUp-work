// if the number is even and less than 15, print a
// if the number is even and more than 15, print b
// if the number is odd and less than 10, print c
// if the number is odd and more than 10, print d

// We need to solve this using two methods
// using nested if else
// using logical operators

// function printResult(number){

//     // if(number%2 === 0){
//     //     if(number < 15){
//     //         console.log("a")
//     //     }else{
//     //         console.log("b")
//     //     }
//     // } else if(number%2 != 0){
//     //     if(number < 10){
//     //         console.log("c")
//     //     }else{
//     //         console.log("d")
//     //     }
//     // }

//     if(number%2 === 0 && number < 15){
//             console.log("a")
//     } else if(number%2 === 0 && number > 15){
//         console.log("b")
//     } else if(number%2 != 0 && number < 10){
//         console.log("c")
//     }else{
//         console.log("d")
//     }

// }

// printResult(5)


// const name = "functionup" 

{
    const sachin = "sachin"

    console.log(sachin)
}

let sum = 0
let product = 1

for (let index = 10; index <=20; index++) {
    
    sum = sum + index

    product = product * index
    
}

// console.log(sum, product)

var myName = "sachin"

myName = "Mr" + " " + myName

console.log(myName)

//s*(s-a)*(s-b)*(s-c)

// create two variables and store numbers in them.
// Now, write code, which return true if one of the variable is 50 or if their sum is 50.
// Otherwise, you need to return false.
// Also handle edge cases
// (in real world, these two numbers will be supplied by the users.
// Now think what if they supply something which is not a number ?)


function checkNumber(a, b){
    //what are you expecting in a and b -- number
    if(typeof a !==  "number" || typeof b !== "number"){
        return "not a number"
    }

}


// console.log(checkNumber(12, 16))

const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
// const [a, ...b] = places

// console.log(b)

// const newArr = [a, ...morePlaces]

// console.log(newArr)


const [a,b,c] = places

const [d, ...e] = morePlaces

const newArr = [ a,b,c, ...e]

console.log(newArr)


const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  }
  

const {address: {pinCode: myPincode}} = myData


console.log(myPincode)