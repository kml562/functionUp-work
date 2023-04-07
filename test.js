// // // local scope, global scope, functional scope

// // //scope 1
// // let b = 90

// // {
// //     // scope 2
// //     let a = "sachin" 
// //     console.log(b) // if I am accessing b from here. Its means what
// //     console.log(a)
// // }


// // // console.log(b)  //  this

// // function test() {

// //     //scope 3
// //     let d = "functionup"
// //     var x = 20
// // }

// // test()

// // console.log(d)

// const rightHand = ["Maggie", "Biscuit", "clothes", "vegtables", 99, true, undefined, null, {name: "sachin"}]

// const subjectsInSemOne = ["Maths", "Computer Science", "semester 2"]



// //how to access element/value in array

// // const a = rightHand[2]

// // //how to add value in an array at last index

// // rightHand.push("something")

// // console.log(rightHand)

// // // how to remove element from last index 

// // rightHand.pop()
// // rightHand.pop()
// // console.log(rightHand)

// const numberList = [12,434,56,898,9]

// const marksList = [78, 98, 67,45]
// // numberList.sort()

// // console.log(numberList)


// // spread operator  ...  

// // console.log(...numberList)

// const newArr = [ 12242,4545,"$",676,7,...numberList, ...marksList, 989,344,23 ]

// // console.log(newArr)





// // const scoreBoard = [126, 15.3, 4, 178]  // what is problem

// // Objects

// let scoreBoard = {
//     run: 123,
//     over: 15.3,
//     wicket: 4,
//     lastInning: 178,
//     team: "India"
// }

// // how to access values in Objects  --> read

// // console.log(socreBoard.team)

// // console.log(socreBoard['run'])


// //CRUD --> create read update delete


// // how to update an Objects

// scoreBoard.run = 129

// scoreBoard.wicket = 5


// scoreBoard.result = "India"  // add new key



// // delete


// delete scoreBoard.wicket



// //replacing run key with score

// scoreBoard.score = scoreBoard.run

// delete scoreBoard.run


// console.log(scoreBoard)


// const newScoreBoard = {
//     ...scoreBoard,
//     name: "sachin"
// }

// console.log(newScoreBoard)
// You  to  Alumni FunctionUp (Direct Message) 12:02 PM
// no
// Anoop C  to  Everyone 3:00 PM
// https://discord.com/download
// You  to  sachin mahto (Direct Message) 4:06 PM
// Name dose't exits
// sachin mahto 4:34 PM
// //destructure in array

// const nameList = ["sachin", "amit", "rajan", "jagdish"]

// // const firstName = nameList[0]
// // const secondName = nameList[1]
// // const thirdName = nameList[2]
// // const fourthName = nameList[3]

// const [firstName, secondName] = nameList

// // console.log(firstName, secondName, thirdName, fourthName)

// // in objects

// const person = {
//     name: "sachin",
//     gender: "Male",
//     location: "Wassepur",
//     age:26
// }

// // const name = person.name
// // const gender = person.gender
// // const location = person.location
// // const age = person.age

// //Name and name is not equal

// let {name, age, gender, location} = person

// // console.log(name, gender, location, age)

// const keys = Object.keys(person)  // it will return all keys in an object
// const values = Object.values(person)  // it will return all values in an object

// // console.log(values)


// // let {} = person


// //rest operator  ...

// const numberList = [12,23,4545,76]

// const [a, b, ...c] = numberList

// // console.log(a,b,c)

// // console.log(d)


// //scope chain
// function random(){  //parent function
//     const a = 10
//     const b = 15

//     function child(){  //child function
//         const c = 60
//         console.log(a)

//         if(true){
//             const d = 123
//             console.log(c)
//         }

//         console.log(d)
//     }

//     console.log(c)
//     child()
// }

// random()