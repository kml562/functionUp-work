// const facebookProfiles = [
//   {
//     firstName: "Akash",
//     lastName: "Agarwal",
//     number: "111111111",
//     likes: ["music", "movies"],
//     hasDrivingLicense: false,
//     address: {
//       location: "rampur",
//       state: "up",
//     },
//     emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
//   },
//   {
//     firstName: "Pritesh",
//     lastName: "Kumar",
//     number: "222222222",
//     likes: ["code", "driving"],
//     hasDrivingLicense: false,
//     address: {
//       location: "gurgaon",
//       state: "haryana",
//     },
//     emails: ["fgdfg@gmail.com"],
//   },
//   {
//     firstName: "Sabiha",
//     lastName: "Khan",
//     number: "333333333",
//     hasDrivingLicense: false,
//     address: {
//       location: "lucknow",
//       state: "up",
//     },
//   },
//   {
//     firstName: "Suyash",
//     lastName: "Kashyap",
//     number: "444444444",
//     likes: ["travel", "driving"],
//     hasDrivingLicense: true,
//     address: {
//       location: "alwar",
//       state: "rajasthan",
//     },
//     emails: ["abc@yahoo.com"],
//   },
//   {
//     firstName: "Jay",
//     likes: ["food", "mobile"],
//     hasDrivingLicense: true,
//     address: {
//       location: "gurgaon",
//       state: "haryana",
//     },
//     emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
//   },
// ];

// function gurgaon(facebookProfiles) {
//   return facebookProfiles.reduce((acc, curr) => {
//     let { firstName, lastName } = curr;

//     if (curr.address.location === "gurgaon") {
//       acc.unshift(lastName ? firstName + " " + lastName : firstName);
//     }
//     return acc;
//   }, []);
// }
// // console.log(gurgaon(facebookProfiles));

// function getDL(state) {
//   return facebookProfiles.reduce((acc, curr) => {
//     const { firstName, lastName, hasDrivingLicense } = curr;
//     if (curr.address.location == state) {
//       hasDrivingLicense
//         ? acc.push(
//             lastName ? firstName + " " + lastName + " D/L" : firstName + " D/L"
//           )
//         : acc.push(
//             lastName
//               ? firstName + " " + lastName + " N D/L"
//               : firstName + " N D/L"
//           );
//     }
//     return acc
//   }, []);
// }
// // console.log(getDL("gurgaon"))

// function getdrv(facebookProfiles){
// let res= facebookProfiles.find((el)=> !el.hasDrivingLicense&&el.likes.includes("driving"))
// return res? res.firstName:"no data"
// }

// console.log(getdrv(facebookProfiles))

let arr=[[14,21,23,64], [33,46,51,65]];
// let ans= arr.map((el)=>el.map((item)=> item+1))
// console.log(ans)
let answer= arr.reduce((acc, curr)=>{
curr.forEach((el)=>
  acc.push(el+1)
)
return acc
},[])
console.log(answer);

// index last index
// index number of elements and replace el