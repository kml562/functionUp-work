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

// =========================================== 1 ==================================================== //


function findCard(value, suit) {
let obj=cardData.find((el)=>el.value==value&&el.suit==suit);
return obj?console.log(true):console.log(false);

}
// findCard(5, 'heart');
// findCard(5, 'diamond')
/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(5, 'heart') should return true
*/

// =============================================== 2 ================================================ //


function getSuits(cardData) { 
    return cardData.reduce((acc, el) => {
        if (!acc.includes(el.suit)) {
          acc.push(el.suit);
        }
        return acc;
      }, []);
}
console.log(getSuits(cardData));
/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/


// ================================================ 3 =============================================== //


function countCardsBySuit(cardData) {
    return cardData.reduce((acc, card) => {
      if (acc[card.suit]) {
        acc[card.suit]++;
      } else {
        acc[card.suit] = 1;
      }
      return acc;
    }, {});
  }
  
  console.log(countCardsBySuit(cardData)); 
  // Output: { heart: 1, club: 3, diamond: 2 }
  
/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/

// ================================================= 4 ============================================== //


  // Output: { heart: [ 7 ], club: [ 8, 2, 10 ], diamond: [ 2, 5 ] }
  

  function getSuitValues(cardData) {
    const result = {};
    for (let card of cardData) {
      if (result[card.suit]) {
        if (!result[card.suit].includes(card.value)) {
          result[card.suit].push(card.value);
        }
      } else {
        result[card.suit] = [card.value];
      }
    }
    return result;
  }

// console.log(getSuitValues(cardData))
function getSuitValuesrec(cardData) {
  return cardData.reduce((acc,{suit, value})=>{
if(!acc[suit]){
  acc[suit] = [value];
 

}else{
  acc[suit].push(value)

}
  },{})
}

/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/

