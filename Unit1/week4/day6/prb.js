// const fun=()=>{
//     let ar="kdfj";
//     function get(){
//         return ar;
//     }
//     return get;
// }
let arr=[1,4,5];

// arr.forEach((el)=>  el=el*2)
// console.log(arr)

// for(let i=arr.length-1; i>=0; i--){
//     console.log(arr[i]);
// }



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
  
  let obj={};
  cardData.forEach((el)=>{
let suit = el.suit;
if(!obj[suit]){
    obj[suit] = 1;
}else{
    obj[suit]++
}
  })
  console.log(obj)