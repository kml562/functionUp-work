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
