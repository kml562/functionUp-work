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
  
//   function getAvailableSuits(cardData) {
//     const suits = cardData.reduce((acc, curr) => {
//       if (!acc.includes(curr.suit)) {
//         acc.push(curr.suit);
//       }
//       return acc;
//     }, []);
//     return suits;
//   }
  
//   const availableSuits = getAvailableSuits(cardData);
//   console.log(availableSuits);
function getSuits(cardData) {
    const ans = cardData.reduce((acc, curr) => {
        
                acc.push(curr.suit);
            
              return acc;
            }, []);


return ans
}

// console.log(getSuits(cardData)); 

function countSuits(cardData) {
return cardData.reduce((acc, curr) => {
if(!acc[curr.suit]){
    acc[curr.suit] =1;
}else{
    acc[curr.suit]++;
}
return acc;
} , {})
  }
//   const result = countSuits(cardData);
// console.log(result);
function getSuitCount(cardData) {
  return cardData.reduce((acc, card) => {
    if (acc[card.suit]==undefined) {
      acc[card.suit]=1;
    } else {
      acc[card.suit]++;
    }
    return acc;
  }, {});
}
// console.log(getSuitCount(cardData));
let arr=[1,3,45]
let val= arr+"";
// let newval= JSON.parse(val);

console.log(val,newval)