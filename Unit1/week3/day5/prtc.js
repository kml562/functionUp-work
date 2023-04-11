// function parent(){
//     let name="kamal";
//     function child(){
//         console.log(name);
//     }
//     return child;
// };

// let callfun= parent()
// console.log(callfu)


//  acc ,curr return valer,incal val 



const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

console.log(cardData[0].suit)
console.log(cardData[0]["suit"])

// data type of key string;
// function getSuitValuesww(cardData) {
//     const result=cardData.reduce((acc,curr)=>{
//       if(!acc[curr["suit"]]){
//         acc[curr.suit]=[curr.value]
//       }else{
//         acc[curr.suit].push(curr.value);
//       }
//       return acc
//     },{})
//       return result
//     }
//     console.log(getSuitValuesww(cardData))