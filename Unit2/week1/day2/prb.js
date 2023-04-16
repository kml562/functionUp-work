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

let ans= facebookProfiles.reduce((acc,curr)=>{
const {firstName,lastName,location}=curr;
if(location==="gurgaon"){
lastName?acc.push(firstName+" "+lastName):acc.push(firstName)
}
return acc
},[])
// console.log(ans)
let arr=[];
facebookProfiles.forEach((el)=>{
    let {firstName,lastName,location}=el
    if(location==="gurgaon"){
        lastName?arr.push(firstName+" "+lastName):arr.push(firstName)
    }
})


let arr1= [2,4,5,6];
arr1.map((el,i,arr)=>{
  arr[i]=el+2;
})
// console.log(arr1)

let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
function birdsInWeek(birdsPerDay,weekno){

    }

    // "function birdsInWeek(birdsPerDay,weekNo) {
    //     let startDay = (weekNo - 1) * 7;
    //     let totalBird = 0;
    //     for (let index = startDay; index < startDay+7; index++) {
    //         totalBird+=birdsPerDay[index];
    //     }
    //     return totalBird;
    // }
    
    // var birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
    // const total = birdsInWeek(birdsPerDay, 1)
    // console.log(total);"