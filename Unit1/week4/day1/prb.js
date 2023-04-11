const array = [23 , 45,467, 789, 34, 989, 56];
let ans= array.map((el,i)=>  i%2===0?el*10:el*2);
// console.log(ans);

const carBrands = ["honda", "toyota", "maruti","tata"]
 const carModel = ["city", "innova", "alto", "nano"]

const obj={};
carBrands.forEach((el,i)=>{
 obj[el]=carModel[i]
})
// console.log(obj)

// carBrands.forEach((el,i)=> console.log(el,i))


// --------------------------------------------------------------------------------------------------/////


const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];
// find single element in array or undefined  && when condition is true it will be break;  el break;
// filter array of elements and elements will push when condition is true;[el,el2] 
// function profileLookup(name, property) {
// const res=facebookProfiles.find((el)=>{
//   return el.firstName==name 
// })
//   if(res){
//   return res[property]?res[property]:"no such prperty"
//   }else{
//     return "no such element"
//   }
// }
// console.log(profileLookup("Pritesh", "number"))
//  filter sc=O(n) find O(1)
// function profileLookup(name, property) {

// let arr= facebookProfiles.filter((el)=>el.firstName==name)
// if(arr.length!=0){
//     return arr[0][property]?
// }
// }
// console.log(profileLookup("Pritesh", "number"))

function getSuitValuesww(cardData) {
    const result=cardData.reduce((acc,curr)=>{
      if(!acc[curr[suit]]){
        acc[curr[suit]]=[curr[value]]
      }else{
        acc[curr[suit]].push(curr[value]);
      }
      return acc
    },{})
      return result
    }
    console.log(getSuitValuesww(cardData))