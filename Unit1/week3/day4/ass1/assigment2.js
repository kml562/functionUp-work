const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        location: "rampur",
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        location: "gurgaon",
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        location: "gurgaon",
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        location: "alwar",
    },
    {
        firstName: "Jay",
        location: "gurgaon",
    },
];

// return the full names of the facebook users who belong to guragon
// HINT: use higher order functions and chain them
let fullNames =facebookProfiles.reduce((acc, profile) =>{
const {firstName,lastName,location} = profile;
if(location ==="gurgaon"){
    acc.push(lastName?firstName+" "+lastName:firstName)
}
return acc;
},[])

//  console.log(fullNames)
// ======================================================================== //

function filterOddNumbers(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const evenNumbers = [1, 2, 3, 4, 5]
let val=evenNumbers.push(9)
console.log(val)
// console.log(evenNumbers);
let x=6;
// 6.filter(filterOddNumbers)
let ansarr= evenNumbers.filter(filterOddNumbers)
// console.log(ansarr)
// evenNumbers.filter(filterOddNumbers);


// filter only works for the array data type it will not work in a number data type and affter push the value
//  into the array
// it will invoking for the a number thats why its not working;p
// push show the new length of the arr
// pop return the value 
/**
 * Q1. without actually running this code, you need to answer whether this code will run or not along with the reason
 ans- we are not invoking the function and .filer 
Q2. now run the above code and see the result/error. 
Analyze the difference bw your answer before and after running the code 

Q2. correct the code so that method chain starts working
 * 
//  */let a=10;
// let b=a;
// let c=10
// console.log(a===b);
// console.log(a===c)
// //  let b=a;
//  let arr=[1,2]
//  let arr3= arr;
//  arr3.push(3)
//  let arr2=[1,2]
// //  console.log(arr==arr2)
// //  let v=10;
// //  v===a
// //  b+=4;
let vali= Math.ceil(5)
console.log(vali)